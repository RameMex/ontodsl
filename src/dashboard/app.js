// ═══════════════════════════════════════════════════════════════════
// OntoDSL Premium Dashboard Frontend Logic & Visual Canvas Graph
// ═══════════════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  const isLocalFile = window.location.protocol === "file:";
  const serverPort = 3000;
  const apiBase = isLocalFile ? `http://localhost:${serverPort}` : `${window.location.protocol}//${window.location.host}`;

  let activeState = null;
  const projectSelector = document.getElementById("project-selector");
  const targetLangSelect = document.getElementById("target-lang");
  const aiModelSelect = document.getElementById("ai-model");
  const apiKeyInput = document.getElementById("gemini-api-key");
  const nextStepBtn = document.getElementById("next-step-btn");
  const resetProjectBtn = document.getElementById("reset-project-btn");
  const roadmapStepsList = document.getElementById("roadmap-steps-list");
  const roadmapCompletionBadge = document.getElementById("roadmap-completion-badge");
  const workspaceFilesList = document.getElementById("workspace-files-list");
  const workspaceFilesBadge = document.getElementById("workspace-files-badge");
  
  if (apiKeyInput) {
    let savedKey = localStorage.getItem("GEMINI_API_KEY");
    if (!savedKey) {
      savedKey = "AIzaSyComMIv5Br1Hum9MvOpqiA_XeGCC80HoAk";
      localStorage.setItem("GEMINI_API_KEY", savedKey);
    }
    apiKeyInput.value = savedKey;
    apiKeyInput.addEventListener("input", () => {
      localStorage.setItem("GEMINI_API_KEY", apiKeyInput.value.trim());
    });
  }

  async function updateSettings() {
    if (!targetLangSelect || !aiModelSelect) return;
    try {
      await fetch(`${apiBase}/api/migrate/update-settings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: aiModelSelect.value,
          target: targetLangSelect.value
        })
      });
      appendTerminalLine("info", `Workspace target updated: Model = ${aiModelSelect.value}, Target Language = ${targetLangSelect.value.toUpperCase()}`);
    } catch (err) {
      appendTerminalLine("error", `Failed to update workspace settings: ${err.message}`);
    }
  }

  if (targetLangSelect) {
    targetLangSelect.addEventListener("change", updateSettings);
  }
  if (aiModelSelect) {
    aiModelSelect.addEventListener("change", updateSettings);
  }
  if (projectSelector) {
    projectSelector.addEventListener("change", async () => {
      const selectedProject = projectSelector.value;
      if (confirm(`Switch project workspace to ${selectedProject === 'drone-delivery' ? 'Drone Delivery System' : 'ArduPilot C++ Filter Library'}? This will reset the current workspace state.`)) {
        try {
          const resetRes = await fetch(`${apiBase}/api/migrate/reset-project`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ project: selectedProject })
          });
          if (!resetRes.ok) throw new Error("Reset project failed");
          
          appendTerminalLine("success", `Workspace reset to ${selectedProject === 'drone-delivery' ? 'Drone Delivery' : 'ArduPilot'}.`);
          
          const initRes = await fetch(`${apiBase}/api/migrate/initialize-roadmap`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ project: selectedProject })
          });
          if (!initRes.ok) throw new Error("Initialize project failed");
          
          appendTerminalLine("success", `Ontology AST graph and roadmap loaded.`);
        } catch (err) {
          appendTerminalLine("error", `Project Switch Error: ${err.message}`);
        }
      } else {
        if (activeState && activeState.projectKey) {
          projectSelector.value = activeState.projectKey;
        }
      }
    });
  }
  
  const statusVal = document.getElementById("status-val");
  const activeFileVal = document.getElementById("active-file-val");
  const costVal = document.getElementById("cost-val");
  const costModelLabel = document.getElementById("cost-model-label");
  const tokensVal = document.getElementById("tokens-val");
  
  const tokenInVal = document.getElementById("token-in-val");
  const tokenOutVal = document.getElementById("token-out-val");
  const tokenCacheVal = document.getElementById("token-cache-val");
  
  const graphVal = document.getElementById("graph-val");
  const edgesVal = document.getElementById("edges-val");
  const graphOverlay = document.getElementById("graph-overlay");
  
  const terminalLog = document.getElementById("terminal-log");
  const terminalContainer = document.getElementById("terminal-container");
  const clearConsoleBtn = document.getElementById("clear-console-btn");

  // New Interactive Elements
  const auditPanel = document.getElementById("audit-panel");
  const hazardsDeck = document.getElementById("hazards-deck");
  const approveBtn = document.getElementById("approve-btn");
  
  const tabConsole = document.getElementById("tab-console");
  const tabTests = document.getElementById("tab-tests");
  const testsContainer = document.getElementById("tests-container");
  const testsContent = document.getElementById("tests-content");
  const testsOverlay = document.getElementById("tests-overlay");

  const cardStatus = document.getElementById("card-status");

  // ─── Canvas Visual Graph Variables ───
  const canvas = document.getElementById("graph-canvas");
  const ctx = canvas.getContext("2d");
  let nodes = [];
  let edges = [];
  let animationFrameId = null;

  // Fit canvas to layout container
  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  // ─── Server Connection & State Management ───
  const sseUrl = `${apiBase}/api/migrate/stream`;
  const eventSource = new EventSource(sseUrl);

  let sseConnected = false;
  let fallbackInterval = null;

  function startFallbackPolling() {
    if (fallbackInterval) return;
    appendTerminalLine("system", "Activating state polling fallback...");
    fallbackInterval = setInterval(async () => {
      if (sseConnected) return; // SSE recovered
      try {
        const response = await fetch(`${apiBase}/api/migrate/state`);
        if (response.ok) {
          const polledState = await response.json();
          updateDashboardUI(polledState);
        }
      } catch (err) {
        // Silently ignore connection errors during polling fallback
      }
    }, 1500);
  }

  eventSource.onopen = () => {
    sseConnected = true;
    appendTerminalLine("system", "Real-time SSE stream connected.");
    if (fallbackInterval) {
      clearInterval(fallbackInterval);
      fallbackInterval = null;
    }
  };

  eventSource.onmessage = (event) => {
    sseConnected = true;
    const state = JSON.parse(event.data);
    updateDashboardUI(state);
  };

  eventSource.onerror = (err) => {
    sseConnected = false;
    appendTerminalLine("system", "Warning: SSE real-time stream offline. Falling back to HTTP polling...");
    startFallbackPolling();
  };

  async function fetchInitialState() {
    try {
      const response = await fetch(`${apiBase}/api/migrate/state`);
      if (response.ok) {
        const initialState = await response.json();
        updateDashboardUI(initialState);
        appendTerminalLine("system", "Successfully synchronized workspace state.");
      } else {
        throw new Error(`Server returned status ${response.status}`);
      }
    } catch (err) {
      appendTerminalLine("error", `Failed to connect to migration server: ${err.message}. Please verify the server is running on ${apiBase}`);
    }
  }

  // Initial Fetch on Load
  fetchInitialState();

  // ─── UI Status Updaters ───
  function updateDashboardUI(state) {
    activeState = state;

    // Update selectors programmatically if they differ (to persist across reloads)
    if (projectSelector && state.projectKey && projectSelector.value !== state.projectKey) {
      projectSelector.value = state.projectKey;
    }
    if (targetLangSelect && state.target && targetLangSelect.value !== state.target) {
      targetLangSelect.value = state.target;
    }
    if (aiModelSelect && state.model && aiModelSelect.value !== state.model) {
      aiModelSelect.value = state.model;
    }

    const sidebarTitle = document.querySelector(".sidebar-project-text h3");
    const sidebarSubtitle = document.querySelector(".sidebar-project-text p");
    const workspacePathLabel = document.querySelector(".workspace-path-label");
    const isDrone = state.projectKey === "drone-delivery";
    
    if (sidebarTitle) sidebarTitle.textContent = isDrone ? "Drone Delivery Workspace" : "ArduPilot Filter Workspace";
    if (sidebarSubtitle) sidebarSubtitle.textContent = isDrone ? "UFO-UML Social Layer Factory" : "Design-by-Contract Factory";
    if (workspacePathLabel) workspacePathLabel.textContent = isDrone ? "📂 src/dashboard/workspace/drone/" : "📂 src/dashboard/workspace/ardupilot/";

    // 1. Status & Active File
    statusVal.textContent = state.status.toUpperCase();
    activeFileVal.textContent = state.activeFile || "Ready to run pipeline";
    
    // Status colors
    statusVal.className = "stat-value";
    if (state.status === "success") statusVal.classList.add("accent-emerald");
    else if (state.status === "failed") statusVal.classList.add("accent-crimson");
    else if (state.status !== "idle") statusVal.classList.add("accent-indigo");

    // Stepper updates
    updateStepper(state.status);

    // 2. Financial Odometer
    costVal.textContent = `$${state.costUsd.toFixed(5)}`;
    if (costModelLabel && state.model) {
      const modelDisplayName = state.model === "gemini-3.5-flash" ? "Gemini 3.5 Flash" : "Gemini 2.5 Flash";
      costModelLabel.textContent = `Estimated ${modelDisplayName} cost`;
    }

    // 3. Tokens breakdown
    const totalTokens = state.tokensInput + state.tokensOutput + state.tokensCached;
    tokensVal.textContent = totalTokens.toLocaleString();
    tokenInVal.textContent = `In: ${state.tokensInput.toLocaleString()}`;
    tokenOutVal.textContent = `Out: ${state.tokensOutput.toLocaleString()}`;
    tokenCacheVal.textContent = `Cached: ${state.tokensCached.toLocaleString()}`;

    // 4. Graph Metrics
    graphVal.textContent = `${state.nodesCount} Nodes`;
    edgesVal.textContent = `${state.edgesCount} relations generated`;

    // 5. Console Terminal Logs
    renderTerminalLogs(state.logs);

    // 6. Hazard Auditing Panel
    if (state.status === "paused_awaiting_approval" && state.detectedBugs && state.detectedBugs.length > 0) {
      cardStatus.classList.add("blink-crimson");
      auditPanel.style.display = "block";
      approveBtn.disabled = false;
      approveBtn.querySelector(".btn-text").textContent = "Approve & Resume Migration";
      
      hazardsDeck.innerHTML = state.detectedBugs.map(bug => `
        <div class="hazard-card ${bug.level}">
          <div class="hazard-header">
            <h4>${bug.title}</h4>
            <span class="hazard-badge ${bug.level}">${bug.level}</span>
          </div>
          <p class="hazard-desc">${bug.description}</p>
          <div class="hazard-meta">
            <span class="hazard-loc">📍 Location: ${bug.originalLocation}</span>
            <span class="hazard-impact">⚠️ Impact: ${bug.impact}</span>
          </div>
        </div>
      `).join("");
    } else {
      cardStatus.classList.remove("blink-crimson");
      auditPanel.style.display = "none";
    }

    // 7. Auto Generated Test Render
    if (state.autoGeneratedTests && state.autoGeneratedTests.length > 0) {
      testsOverlay.style.display = "none";
      testsContent.style.display = "block";
      tabTests.classList.add("accent-emerald");
      
      testsContent.innerHTML = state.autoGeneratedTests.map((code, idx) => `
        <div class="test-suite-block">
          <div class="test-suite-header">🧪 Autonomous Invariant Verification Suite #${idx + 1}</div>
          <pre class="test-suite-code"><code>${escapeHtml(code)}</code></pre>
        </div>
      `).join("");
    } else {
      testsOverlay.style.display = "flex";
      testsContent.style.display = "none";
      tabTests.classList.remove("accent-emerald");
    }

    // 8. Roadmap Steps Sidebar Checklist
    if (state.projectRoadmap && state.projectRoadmap.length > 0) {
      const migrationSteps = state.projectRoadmap.filter(s => s.id !== "step-0");
      const completedCount = migrationSteps.filter(s => s.status === "completed").length;
      if (roadmapCompletionBadge) {
        roadmapCompletionBadge.textContent = `${completedCount}/${migrationSteps.length} DONE`;
      }

      roadmapStepsList.innerHTML = state.projectRoadmap.map(step => {
        const stepNum = parseInt(step.id.replace("step-", ""), 10);
        const isActive = (state.activeStepIndex === stepNum);
        const cardClass = `roadmap-step-card ${step.status} ${isActive ? 'active' : ''}`;
        return `
          <div class="${cardClass}" data-step-id="${step.id}">
            <div class="step-card-header">
              <span class="step-name">${step.name}</span>
              <span class="status-badge ${step.status}">${step.status}</span>
            </div>
            <p class="step-desc">${step.description}</p>
            <div class="step-meta-row">
              <span class="step-file">📄 ${step.file}</span>
              <span class="complexity-badge ${step.complexity}">${step.complexity}</span>
            </div>
          </div>
        `;
      }).join("");
    } else {
      roadmapStepsList.innerHTML = `<div class="sidebar-loader">Loading workspace...</div>`;
    }

    // Render Dedicated Workspace Files List
    if (workspaceFilesList && state.projectRoadmap) {
      const activeTarget = state.target || "rust";
      const ext = activeTarget === "rust" ? "rs" : "ts";
      
      // Exclude step-0 (which is the initial analysis step, no file generated)
      const fileSteps = state.projectRoadmap.filter(s => s.id !== "step-0");
      let generatedCount = 0;
      
      const filesHtml = fileSteps.map(step => {
        const safeName = step.name.split(" ")[0].replace(/[^a-zA-Z0-9]/g, "");
        const fileName = `${safeName}.${ext}`;
        const isGenerated = step.status === "completed";
        if (isGenerated) {
          generatedCount++;
        }
        
        return `
          <div class="workspace-file-item ${isGenerated ? 'generated' : 'pending'}">
            <span class="workspace-file-name">${fileName}</span>
            <span class="file-status-icon">${isGenerated ? '🟢 READY' : '⚪ PENDING'}</span>
          </div>
        `;
      }).join("");
      
      workspaceFilesList.innerHTML = filesHtml || `<div class="sidebar-loader">No files configured</div>`;
      if (workspaceFilesBadge) {
        workspaceFilesBadge.textContent = `${generatedCount}/${fileSteps.length} GEN`;
      }
    }

    // 9. Update Next Step Button
    if (nextStepBtn) {
      nextStepBtn.disabled = false;
      nextStepBtn.classList.remove("loading");
      const btnText = nextStepBtn.querySelector(".btn-text");

      if (state.activeStepIndex === 0) {
        btnText.textContent = "Initialize & Analyze System";
      } else if (state.activeStepIndex >= state.projectRoadmap.length) {
        btnText.textContent = "Migration Complete 🚀";
        nextStepBtn.disabled = true;
      } else {
        const activeStep = state.projectRoadmap[state.activeStepIndex];
        btnText.textContent = `Start Step ${state.activeStepIndex}: ${activeStep.name}`;
        
        if (state.status === "fetching" || state.status === "extracting" || state.status === "compiling" || state.status === "implementing") {
          btnText.textContent = "Processing Migration...";
          nextStepBtn.disabled = true;
          nextStepBtn.classList.add("loading");
        } else if (state.status === "paused_awaiting_approval") {
          btnText.textContent = "Awaiting Approval...";
          nextStepBtn.disabled = true;
        }
      }
    }

    // 10. Canvas Graph Renders
    if (state.graph && state.graph.nodes && state.graph.nodes.length > 0) {
      graphOverlay.style.opacity = "0";
      setTimeout(() => { graphOverlay.style.display = "none"; }, 300);
      loadGraphData(state.graph);
    } else {
      graphOverlay.style.display = "flex";
      graphOverlay.style.opacity = "1";
      nodes = [];
      edges = [];
    }
  }

  function updateStepper(status) {
    const steps = {
      extract: document.getElementById("step-extract"),
      verify: document.getElementById("step-verify"),
      approval: document.getElementById("step-approval"),
      codegen: document.getElementById("step-codegen")
    };
    const lines = {
      extractVerify: document.getElementById("line-extract-verify"),
      verifyApproval: document.getElementById("line-verify-approval"),
      approvalCodegen: document.getElementById("line-approval-codegen")
    };

    // Reset all
    Object.values(steps).forEach(s => {
      if (s) s.className = "step";
    });
    Object.values(lines).forEach(l => {
      if (l) l.className = "step-line";
    });

    if (status === "idle") return;

    if (status === "fetching" || status === "extracting") {
      if (steps.extract) steps.extract.classList.add("active");
    }
    else if (status === "compiling") {
      if (steps.extract) steps.extract.classList.add("completed");
      if (lines.extractVerify) lines.extractVerify.classList.add("completed");
      if (steps.verify) steps.verify.classList.add("active");
    }
    else if (status === "paused_awaiting_approval") {
      if (steps.extract) steps.extract.classList.add("completed");
      if (lines.extractVerify) lines.extractVerify.classList.add("completed");
      if (steps.verify) steps.verify.classList.add("completed");
      if (lines.verifyApproval) lines.verifyApproval.classList.add("completed");
      if (steps.approval) steps.approval.classList.add("active");
    }
    else if (status === "implementing") {
      if (steps.extract) steps.extract.classList.add("completed");
      if (lines.extractVerify) lines.extractVerify.classList.add("completed");
      if (steps.verify) steps.verify.classList.add("completed");
      if (lines.verifyApproval) lines.verifyApproval.classList.add("completed");
      if (steps.approval) steps.approval.classList.add("completed");
      if (lines.approvalCodegen) lines.approvalCodegen.classList.add("completed");
      if (steps.codegen) steps.codegen.classList.add("active");
    }
    else if (status === "success") {
      if (steps.extract) steps.extract.classList.add("completed");
      if (lines.extractVerify) lines.extractVerify.classList.add("completed");
      if (steps.verify) steps.verify.classList.add("completed");
      if (lines.verifyApproval) lines.verifyApproval.classList.add("completed");
      if (steps.approval) steps.approval.classList.add("completed");
      if (lines.approvalCodegen) lines.approvalCodegen.classList.add("completed");
      if (steps.codegen) steps.codegen.classList.add("completed");
    }
    else if (status === "failed") {
      if (steps.extract) steps.extract.classList.add("completed");
      if (steps.verify) steps.verify.classList.add("completed");
      if (steps.approval) steps.approval.classList.add("completed");
      if (steps.codegen) steps.codegen.classList.add("completed");
    }
  }

  function renderTerminalLogs(logs) {
    terminalLog.innerHTML = "";
    logs.forEach(log => {
      let type = "info";
      if (log.toLowerCase().includes("error") || log.toLowerCase().includes("fail")) {
        type = "error";
      } else if (log.toLowerCase().includes("success") || log.toLowerCase().includes("passed")) {
        type = "success";
      } else if (log.includes("Z3:")) {
        type = "z3";
      } else if (log.includes("Agentic Loop:")) {
        type = "agent";
      }
      
      const line = document.createElement("div");
      line.className = `terminal-line ${type}`;
      line.textContent = log;
      terminalLog.appendChild(line);
    });
    // Auto Scroll to bottom
    terminalContainer.scrollTop = terminalContainer.scrollHeight;
  }

  function appendTerminalLine(type, msg) {
    const timestamp = new Date().toLocaleTimeString();
    const formatted = `[${timestamp}] [${type.toUpperCase()}] ${msg}`;
    const line = document.createElement("div");
    line.className = `terminal-line ${type}`;
    line.textContent = formatted;
    terminalLog.appendChild(line);
    terminalContainer.scrollTop = terminalContainer.scrollHeight;
  }

  // Helper utility to escape HTML characters
  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ─── Tab Viewport Listeners ───
  if (tabConsole) {
    tabConsole.addEventListener("click", () => {
      tabConsole.classList.add("active");
      tabTests.classList.remove("active");
      terminalContainer.style.display = "block";
      testsContainer.style.display = "none";
    });
  }

  if (tabTests) {
    tabTests.addEventListener("click", () => {
      tabTests.classList.add("active");
      tabConsole.classList.remove("active");
      testsContainer.style.display = "block";
      terminalContainer.style.display = "none";
    });
  }

  // ─── Native Canvas Graph Drawer (Physics-based) ───
  function loadGraphData(newGraph) {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = Math.min(cx, cy) * 0.7;

    const existingNodesMap = new Map(nodes.map(n => [n.id, n]));

    nodes = newGraph.nodes.map((node, i) => {
      const existing = existingNodesMap.get(node.id);
      let x = cx + radius * Math.cos((i * 2 * Math.PI) / newGraph.nodes.length);
      let y = cy + radius * Math.sin((i * 2 * Math.PI) / newGraph.nodes.length);

      if (existing) {
        x = existing.x;
        y = existing.y;
      }

      // Match node to roadmap step to get status & hazards
      let nodeStep = null;
      if (activeState && activeState.projectRoadmap) {
        nodeStep = activeState.projectRoadmap.find(s => {
          const sName = s.name.toLowerCase();
          const nName = node.data.name.toLowerCase();
          if (nName === "lowpassfilter" && sName.includes("constdt")) return false;
          if (nName === "lowpassfilter" && sName.includes("2p")) return false;
          return sName.includes(nName);
        });
      }

      const stepStatus = nodeStep ? nodeStep.status : "pending";
      
      // Check if this node has active bugs in current state
      const hasActiveBugs = activeState && activeState.detectedBugs && activeState.detectedBugs.length > 0 &&
        activeState.detectedBugs.some(b => {
          return b.originalLocation.toLowerCase().includes(node.data.name.toLowerCase());
        });

      let hazardLevel = null;
      if (hasActiveBugs) {
        const worstBug = activeState.detectedBugs.find(b => b.originalLocation.toLowerCase().includes(node.data.name.toLowerCase()));
        hazardLevel = worstBug ? worstBug.level : "warning";
      }

      return {
        id: node.id,
        name: node.data.name,
        stereotype: node.data.stereotype,
        category: node.data.category,
        x,
        y,
        vx: 0,
        vy: 0,
        radius: 35 + (node.data.invariantCount * 5),
        color: getNodeColor(node.data.category),
        stepStatus,
        hasActiveBugs,
        hazardLevel
      };
    });

    edges = newGraph.edges.map(edge => {
      return {
        id: edge.id,
        source: edge.source,
        target: edge.target,
        label: edge.label,
        type: edge.type
      };
    });

    if (!animationFrameId) {
      animateGraph();
    }
  }

  function getNodeColor(category) {
    switch (category) {
      case "kind": return "hsl(250, 80%, 65%)"; // Indigo
      case "subkind": return "hsl(217, 91%, 60%)"; // Blue
      case "relator": return "hsl(40, 90%, 55%)"; // Orange/Gold
      case "role": return "hsl(280, 80%, 65%)"; // Purple
      case "collective": return "hsl(160, 84%, 45%)"; // Emerald
      default: return "hsl(225, 12%, 68%)";
    }
  }

  function animateGraph() {
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // Apply repulsive & center forces
    for (let i = 0; i < nodes.length; i++) {
      const n1 = nodes[i];

      n1.vx += (cx - n1.x) * 0.003;
      n1.vy += (cy - n1.y) * 0.003;

      for (let j = i + 1; j < nodes.length; j++) {
        const n2 = nodes[j];
        const dx = n2.x - n1.x;
        const dy = n2.y - n1.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const minDist = n1.radius + n2.radius + 60;

        if (dist < minDist) {
          const force = (minDist - dist) * 0.08;
          const forceX = (dx / dist) * force;
          const forceY = (dy / dist) * force;

          n1.vx -= forceX;
          n1.vy -= forceY;
          n2.vx += forceX;
          n2.vy += forceY;
        }
      }
    }

    // Link spring attraction forces
    edges.forEach(edge => {
      const sourceNode = nodes.find(n => n.id === edge.source);
      const targetNode = nodes.find(n => n.id === edge.target);

      if (sourceNode && targetNode) {
        const dx = targetNode.x - sourceNode.x;
        const dy = targetNode.y - sourceNode.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const targetDist = 180;

        const force = (dist - targetDist) * 0.02;
        const forceX = (dx / dist) * force;
        const forceY = (dy / dist) * force;

        sourceNode.vx += forceX;
        sourceNode.vy += forceY;
        targetNode.vx -= forceX;
        targetNode.vy -= forceY;
      }
    });

    // Update positions & friction
    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      n.vx *= 0.85;
      n.vy *= 0.85;

      n.x = Math.max(n.radius, Math.min(canvas.width - n.radius, n.x));
      n.y = Math.max(n.radius, Math.min(canvas.height - n.radius, n.y));
    });

    // Clear Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Links/Edges
    edges.forEach(edge => {
      const s = nodes.find(n => n.id === edge.source);
      const t = nodes.find(n => n.id === edge.target);

      if (s && t) {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = 2;
        if (edge.type === "inheritance") {
          ctx.strokeStyle = "hsla(217, 91%, 60%, 0.15)";
          ctx.setLineDash([5, 5]);
        } else {
          ctx.setLineDash([]);
        }

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
        ctx.stroke();
        ctx.setLineDash([]);

        const progress = (Date.now() % 2000) / 2000;
        const dotX = s.x + (t.x - s.x) * progress;
        const dotY = s.y + (t.y - s.y) * progress;

        ctx.fillStyle = edge.type === "inheritance" ? "hsl(217, 91%, 60%)" : "hsl(160, 84%, 45%)";
        ctx.beginPath();
        ctx.arc(dotX, dotY, 4, 0, 2 * Math.PI);
        ctx.fill();
      }
    });

    // Draw Nodes
    nodes.forEach(n => {
      // Glow Ring
      ctx.shadowBlur = 15;
      ctx.shadowColor = n.color;
      
      ctx.fillStyle = "hsl(230, 38%, 10%)";
      ctx.strokeStyle = n.color;
      ctx.lineWidth = 3;

      // Completed steps node color
      if (n.stepStatus === "completed") {
        ctx.strokeStyle = "hsl(160, 84%, 45%)"; // Emerald
        ctx.shadowColor = "hsl(160, 84%, 45%)";
      } 
      // Active steps node color
      else if (n.stepStatus === "active") {
        const pulse = 1 + 0.05 * Math.sin(Date.now() / 200);
        ctx.strokeStyle = "hsl(217, 91%, 60%)"; // pulsing Blue
        ctx.shadowColor = "hsl(217, 91%, 60%)";
        ctx.shadowBlur = 20 * pulse;
      }
      // Failed steps node color
      else if (n.stepStatus === "failed") {
        ctx.strokeStyle = "hsl(340, 80%, 55%)"; // Crimson
        ctx.shadowColor = "hsl(340, 80%, 55%)";
      }

      // Draw custom animated glowing ring for legacy components with active contract hazards
      if (n.hasActiveBugs) {
        const pulse = 1 + 0.08 * Math.sin(Date.now() / 250);
        const hazardColor = n.hazardLevel === "critical" ? "hsl(340, 80%, 55%)" : "hsl(40, 90%, 55%)";
        ctx.strokeStyle = hazardColor;
        ctx.shadowColor = hazardColor;
        ctx.shadowBlur = 25 * pulse;
        
        ctx.beginPath();
        ctx.arc(n.x, n.y, (n.radius - 3) * pulse, 0, 2 * Math.PI);
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius - 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // Reset shadows
      ctx.shadowBlur = 0;

      // Label Texts
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.font = "bold 9px 'Inter'";
      ctx.textAlign = "center";
      ctx.fillText(n.stereotype ? `<<${n.stereotype}>>` : "", n.x, n.y - 8);

      ctx.fillStyle = "hsl(225, 20%, 94%)";
      ctx.font = "bold 11px 'Outfit'";
      ctx.fillText(n.name, n.x, n.y + 6);
    });

    animationFrameId = requestAnimationFrame(animateGraph);
  }

  // ─── Actions & Submissions ───
  if (nextStepBtn) {
    nextStepBtn.addEventListener("click", async () => {
      if (!activeState) {
        appendTerminalLine("warning", "No connection to server state. Attempting to synchronize...");
        await fetchInitialState();
        if (!activeState) {
          appendTerminalLine("error", "Unable to proceed: Server state is unavailable. Please verify the server is running.");
          return;
        }
      }

      nextStepBtn.disabled = true;
      nextStepBtn.classList.add("loading");
      const btnText = nextStepBtn.querySelector(".btn-text");

      const isInitializing = activeState.activeStepIndex === 0;
      const url = isInitializing 
        ? `${apiBase}/api/migrate/initialize-roadmap`
        : `${apiBase}/api/migrate/start-step`;

      btnText.textContent = isInitializing ? "Analyzing System..." : "Processing Migration...";

      // Auto-switch to Console tab when starting
      if (tabConsole) tabConsole.click();

      try {
        const headers = { "Content-Type": "application/json" };
        if (apiKeyInput && apiKeyInput.value.trim()) {
          headers["X-Gemini-API-Key"] = apiKeyInput.value.trim();
        }

        const body = isInitializing ? null : JSON.stringify({
          model: aiModelSelect ? aiModelSelect.value : "gemini-2.5-flash",
          target: targetLangSelect ? targetLangSelect.value : "rust"
        });

        const response = await fetch(url, {
          method: "POST",
          headers,
          body
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        appendTerminalLine("info", `API: Request accepted. Workflow updated.`);
      } catch (err) {
        appendTerminalLine("error", `API Error: ${err.message}`);
        nextStepBtn.disabled = false;
        nextStepBtn.classList.remove("loading");
      }
    });
  }

  if (resetProjectBtn) {
    resetProjectBtn.addEventListener("click", async () => {
      if (!confirm("Are you sure you want to reset the workspace state? This will clear all progress.")) {
        return;
      }
      
      resetProjectBtn.disabled = true;
      try {
        const response = await fetch(`${apiBase}/api/migrate/reset-project`, {
          method: "POST"
        });
        if (!response.ok) throw new Error("Reset request failed");
        appendTerminalLine("success", "Project workspace state reset successfully.");
      } catch (err) {
        appendTerminalLine("error", `Reset Error: ${err.message}`);
      } finally {
        resetProjectBtn.disabled = false;
      }
    });
  }

  // Approve action POST fetch
  if (approveBtn) {
    approveBtn.addEventListener("click", async () => {
      approveBtn.disabled = true;
      approveBtn.querySelector(".btn-text").textContent = "Resuming Codegen Pipeline...";
      
      try {
        const res = await fetch(`${apiBase}/api/migrate/approve`, {
          method: "POST"
        });
        if (!res.ok) throw new Error("Approval request failed");
        appendTerminalLine("success", "Developer approval recorded. Execution resumed!");
        
        // Auto-switch to tests tab to show real-time test generation!
        setTimeout(() => {
          if (tabTests) tabTests.click();
        }, 800);
      } catch (err) {
        appendTerminalLine("error", `Approval Error: ${err.message}`);
        approveBtn.disabled = false;
        approveBtn.querySelector(".btn-text").textContent = "Approve & Resume Migration";
      }
    });
  }

  if (clearConsoleBtn) {
    clearConsoleBtn.addEventListener("click", () => {
      terminalLog.innerHTML = "";
      appendTerminalLine("system", "Console log cleared.");
    });
  }

  // ─── Fullscreen Viewport Toggle ───
  const btnFullscreen = document.getElementById("btn-fullscreen-graph");
  const viewportCard = document.querySelector(".viewport-card");
  if (btnFullscreen && viewportCard) {
    btnFullscreen.addEventListener("click", () => {
      const isFullscreen = viewportCard.classList.toggle("fullscreen-mode");
      document.body.classList.toggle("fullscreen-open", isFullscreen);
      
      // Instantly trigger layout calculations
      resizeCanvas();
      
      if (isFullscreen) {
        appendTerminalLine("system", "Viewport expanded to immersive immersive view.");
      } else {
        appendTerminalLine("system", "Viewport restored to standard dashboard layout.");
      }
      
      // If three.js is active, trigger resize event
      if (threeInitialized) {
        window.dispatchEvent(new Event("resize"));
      }
    });
  }

  // ─── Workspace Left Tab Elements ───
  const tabGraph = document.getElementById("tab-graph");
  const tabSimulator = document.getElementById("tab-simulator");
  const graphContainer = document.getElementById("graph-container");
  const simulatorContainer = document.getElementById("simulator-container");

  if (tabGraph && tabSimulator && graphContainer && simulatorContainer) {
    tabGraph.addEventListener("click", () => {
      tabGraph.classList.add("active");
      tabSimulator.classList.remove("active");
      graphContainer.style.display = "block";
      simulatorContainer.style.display = "none";
      if (animationFrameId === null) {
        animateGraph();
      }
    });

    tabSimulator.addEventListener("click", () => {
      tabSimulator.classList.add("active");
      tabGraph.classList.remove("active");
      graphContainer.style.display = "none";
      simulatorContainer.style.display = "flex";
      
      // Stop canvas graph animation frame to save CPU
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      
      if (!threeInitialized) {
        initThreeJS();
      }
    });
  }

  // ─── 3D Avionics Simulator & closed loop flight dynamics ───
  let threeInitialized = false;
  let scene, camera, renderer, drone, rotors = [];
  let particleSystem = null;
  let simMode = "safe"; // "safe" vs "legacy"
  let simStatus = "stable"; // "stable", "rollback", "crashed"
  let pitch = 0.0;
  let pitchRate = 0.0;
  let targetPitch = 0.0;
  let dt = 0.01;
  let time = 0.0;
  
  // Simulated Safe wrapper state
  let safeIntegrator = 0.0;
  let safeLastError = 0.0;
  let safeErrorFilterOutput = 0.0;

  // Simulated Legacy C++ state
  let cppIntegrator = 0.0;
  let cppLastError = 0.0;
  let cppErrorFilterOutput = 0.0;

  // Real-time oscilloscope data queue
  let oscilloData = [];
  const maxOscilloPoints = 150;

  function initThreeJS() {
    threeInitialized = true;
    const container = document.getElementById("threejs-canvas-container");
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0c16);
    scene.fog = new THREE.FogExp2(0x0a0c16, 0.015);

    camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 5, 8.5);

    // 2. Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Resize listener
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      }
    });
    resizeObserver.observe(container);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.95);
    dirLight.position.set(5, 15, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // Emissive glowing grid lines
    const gridHelper = new THREE.GridHelper(60, 60, 0x6366f1, 0x1e293b);
    gridHelper.position.y = 0.01;
    scene.add(gridHelper);

    // Neon flight pad
    const padGeo = new THREE.RingGeometry(0.1, 4.5, 32);
    const padMat = new THREE.MeshBasicMaterial({ color: 0x6366f1, side: THREE.DoubleSide, transparent: true, opacity: 0.08 });
    const pad = new THREE.Mesh(padGeo, padMat);
    pad.rotation.x = Math.PI / 2;
    pad.position.y = 0.02;
    scene.add(pad);

    // Ground plane
    const groundGeo = new THREE.PlaneGeometry(200, 200);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x05070e, roughness: 0.95 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // 4. Drone Model construction
    drone = new THREE.Group();
    drone.position.set(0, 4, 0);
    scene.add(drone);

    // Body hub (glowing glass sphere)
    const hubGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const hubMat = new THREE.MeshStandardMaterial({ 
      color: 0x6366f1, 
      roughness: 0.15, 
      metalness: 0.9, 
      emissive: 0x6366f1, 
      emissiveIntensity: 0.65 
    });
    const hub = new THREE.Mesh(hubGeo, hubMat);
    drone.add(hub);

    // 4 arms extending out (X shape)
    const armGeo = new THREE.BoxGeometry(0.15, 0.08, 3.2);
    const armMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.6, roughness: 0.35 });
    
    // Arm X1 (front-left to back-right)
    const arm1 = new THREE.Mesh(armGeo, armMat);
    arm1.rotation.y = Math.PI / 4;
    drone.add(arm1);

    // Arm X2 (front-right to back-left)
    const arm2 = new THREE.Mesh(armGeo, armMat);
    arm2.rotation.y = -Math.PI / 4;
    drone.add(arm2);

    // 4 Rotors / Motors at endpoints
    const rotorGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.25, 8);
    const rotorMat = new THREE.MeshStandardMaterial({ color: 0x0f172a });

    const rotorPositions = [
      { x: 1.13, z: 1.13, isFront: true },   // Front-Right
      { x: -1.13, z: 1.13, isFront: true },  // Front-Left
      { x: 1.13, z: -1.13, isFront: false }, // Back-Right
      { x: -1.13, z: -1.13, isFront: false } // Back-Left
    ];

    rotorPositions.forEach((pos, idx) => {
      const motor = new THREE.Mesh(rotorGeo, rotorMat);
      motor.position.set(pos.x, 0.1, pos.z);
      drone.add(motor);

      // Spinning propeller blades
      const propGeo = new THREE.BoxGeometry(1.0, 0.02, 0.08);
      const propMat = new THREE.MeshStandardMaterial({ 
        color: pos.isFront ? 0x10b981 : 0xef4444, 
        transparent: true, 
        opacity: 0.85 
      });
      const prop = new THREE.Mesh(propGeo, propMat);
      prop.position.y = 0.15;
      motor.add(prop);
      rotors.push(prop);

      // Glowing LED marker under motor
      const ledGeo = new THREE.SphereGeometry(0.08, 8, 8);
      const ledMat = new THREE.MeshBasicMaterial({ color: pos.isFront ? 0x10b981 : 0xef4444 });
      const led = new THREE.Mesh(ledGeo, ledMat);
      led.position.y = -0.15;
      motor.add(led);
    });

    // 5. Particle Explosion System (Embers on crash)
    const particleCount = 60;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;
      velocities.push({
        x: (Math.random() - 0.5) * 8.0,
        y: Math.random() * 8.0,
        z: (Math.random() - 0.5) * 8.0
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf43f5e,
      size: 0.18,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });

    particleSystem = new THREE.Points(particleGeo, particleMat);
    particleSystem.visible = false;
    scene.add(particleSystem);
    particleSystem.velocities = velocities;

    // Start WebGL loop
    animateThree();
    setupSimulatorEventListeners();
  }

  function animateThree() {
    if (!threeInitialized) return;
    requestAnimationFrame(animateThree);

    time += 0.05;

    // 1. Closed Loop Physics Calculations
    targetPitch = 12.0 * Math.sin(time * 0.05); // oscillates in degrees

    const targetPitchRad = targetPitch * Math.PI / 180;
    const actualPitchRad = pitch;

    const error = targetPitchRad - actualPitchRad;
    let controlTorque = 0.0;

    // Safe Wrapper Mode vs Legacy C++ Mode math
    if (simMode === "safe") {
      try {
        let trialIntegrator = safeIntegrator;
        let trialErrorFilterOutput = safeErrorFilterOutput;

        // Verify dt is not zero (Nyquist or div-by-zero violation)
        if (dt < 0.0001) {
          throw new Error("Precondition Violated: dt is too small!");
        }

        // Apply error low-pass filter
        let filteredError = 0.85 * trialErrorFilterOutput + 0.15 * error;
        
        // Apply derivative filter
        let derivative = (filteredError - trialErrorFilterOutput) / dt;

        // PID output calculation
        let pTerm = filteredError * 3.5;
        let newIntegrator = trialIntegrator + (filteredError * 0.9 * dt);
        let dTerm = derivative * 0.45;

        // Invariant enforcement
        if (isNaN(pTerm) || isNaN(newIntegrator) || isNaN(dTerm) || !isFinite(pTerm) || !isFinite(newIntegrator) || !isFinite(dTerm)) {
          throw new Error("NaN Invariant Violation Intercepted!");
        }

        // Safe Transaction Commit!
        safeErrorFilterOutput = filteredError;
        safeIntegrator = newIntegrator;

        controlTorque = pTerm + dTerm + safeIntegrator;
        
        if (simStatus === "rollback") {
          simStatus = "stable";
        }
      } catch (err) {
        simStatus = "rollback";
        controlTorque = 0.0; 
      }
    } else {
      // Legacy C++ Mode (direct mutation, no isolation, no rollback!)
      let filteredError = 0.85 * cppErrorFilterOutput + 0.15 * error;
      
      let derivative = 0.0;
      if (dt === 0) {
        derivative = NaN; 
      } else {
        derivative = (filteredError - cppErrorFilterOutput) / dt;
      }

      let pTerm = filteredError * 3.5;
      cppIntegrator += (filteredError * 0.9 * dt);
      let dTerm = derivative * 0.45;

      controlTorque = pTerm + dTerm + cppIntegrator;

      cppErrorFilterOutput = filteredError;

      if (isNaN(controlTorque) || !isFinite(controlTorque)) {
        simStatus = "crashed";
      }
    }

    // 2. Apply control torque to attitude physics
    if (simStatus !== "crashed") {
      const damping = 0.22;
      const torqueScale = 18.0;
      
      const pitchAcceleration = (controlTorque * torqueScale) - (damping * pitchRate);
      
      pitchRate += pitchAcceleration * 0.01;
      pitch += pitchRate * 0.01;
      
      drone.position.y = 4.0 + 0.25 * Math.sin(time * 0.08);
      drone.position.x = 0;
      drone.position.z = 0;
      
      drone.rotation.set(pitch, 0, 0);

      rotors.forEach((prop, i) => {
        prop.rotation.y += 0.85;
      });

      drone.rotation.z = 0.04 * Math.sin(time * 0.1);
    } else {
      if (drone.position.y > 0.15) {
        drone.position.y -= 0.15; 
        drone.rotation.x += 0.25;
        drone.rotation.y += 0.35;
        drone.rotation.z += 0.15;
        
        rotors.forEach(prop => {
          prop.rotation.y += 0.05;
        });
      } else {
        drone.position.y = 0.12;
        
        if (!particleSystem.visible) {
          particleSystem.visible = true;
          particleSystem.position.copy(drone.position);
          const posAttr = particleSystem.geometry.attributes.position;
          for (let i = 0; i < posAttr.count; i++) {
            posAttr.setXYZ(i, 0, 0, 0);
          }
          posAttr.needsUpdate = true;
        }
      }

      if (particleSystem.visible) {
        const posAttr = particleSystem.geometry.attributes.position;
        const vels = particleSystem.velocities;
        for (let i = 0; i < posAttr.count; i++) {
          let px = posAttr.getX(i) + vels[i].x * 0.015;
          let py = posAttr.getY(i) + vels[i].y * 0.015 - 0.098 * 0.1; 
          let pz = posAttr.getZ(i) + vels[i].z * 0.015;
          
          vels[i].y -= 0.098; 
          
          posAttr.setXYZ(i, px, py, pz);
        }
        posAttr.needsUpdate = true;
      }
    }

    camera.lookAt(0, drone.position.y * 0.6, 0);

    renderer.render(scene, camera);
    updateHUDLabels();
    drawOscilloscope();
  }

  function updateHUDLabels() {
    const telemetryTarget = document.getElementById("telemetry-target-pitch");
    const telemetryActual = document.getElementById("telemetry-actual-pitch");
    const telemetryIntegrator = document.getElementById("telemetry-integrator");
    const telemetrySafety = document.getElementById("telemetry-safety");
    const indicator = document.getElementById("sim-status-indicator");
    const badge = document.getElementById("sim-status-badge");

    if (telemetryTarget) telemetryTarget.textContent = `${targetPitch.toFixed(2)}°`;
    if (telemetryActual) {
      if (simStatus === "crashed" && drone.position.y <= 0.15) {
        telemetryActual.textContent = "FATAL";
        telemetryActual.style.color = "var(--accent-crimson)";
      } else {
        telemetryActual.textContent = `${(pitch * 180 / Math.PI).toFixed(2)}°`;
        telemetryActual.style.color = "var(--accent-blue)";
      }
    }
    
    if (telemetryIntegrator) {
      const activeInt = simMode === "safe" ? safeIntegrator : cppIntegrator;
      telemetryIntegrator.textContent = isNaN(activeInt) ? "NaN (LOCKED)" : activeInt.toFixed(4);
      if (isNaN(activeInt)) {
        telemetryIntegrator.style.color = "var(--accent-crimson)";
      } else {
        telemetryIntegrator.style.color = "var(--text-primary)";
      }
    }

    if (telemetrySafety && indicator && badge) {
      if (simStatus === "stable") {
        telemetrySafety.textContent = "PRISTINE";
        telemetrySafety.style.color = "var(--accent-emerald)";
        indicator.className = "status-indicator online";
        badge.textContent = "STABLE HOVER";
        badge.style.color = "var(--accent-emerald)";
      } else if (simStatus === "rollback") {
        telemetrySafety.textContent = "ROLLBACK ACTIVE";
        telemetrySafety.style.color = "var(--accent-gold)";
        indicator.className = "status-indicator warning blink-gold"; 
        badge.textContent = "ROLLBACK SAFE";
        badge.style.color = "var(--accent-gold)";
      } else if (simStatus === "crashed") {
        telemetrySafety.textContent = "CRASHED";
        telemetrySafety.style.color = "var(--accent-crimson)";
        indicator.className = "status-indicator offline blink-crimson";
        badge.textContent = "NaN CONTROL FAILURE";
        badge.style.color = "var(--accent-crimson)";
      }
    }
  }

  function drawOscilloscope() {
    const oscCanvas = document.getElementById("oscillo-canvas");
    if (!oscCanvas) return;
    const oCtx = oscCanvas.getContext("2d");
    
    const rect = oscCanvas.getBoundingClientRect();
    if (oscCanvas.width !== rect.width || oscCanvas.height !== rect.height) {
      oscCanvas.width = rect.width;
      oscCanvas.height = rect.height;
    }

    const oW = oscCanvas.width;
    const oH = oscCanvas.height;

    oscilloData.push({
      target: targetPitch,
      actual: simStatus === "crashed" ? NaN : (pitch * 180 / Math.PI)
    });

    if (oscilloData.length > maxOscilloPoints) {
      oscilloData.shift();
    }

    oCtx.clearRect(0, 0, oW, oH);

    oCtx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    oCtx.lineWidth = 1;
    oCtx.beginPath();
    oCtx.moveTo(0, oH / 2);
    oCtx.lineTo(oW, oH / 2);
    oCtx.stroke();

    function mapPitchToY(degrees) {
      if (isNaN(degrees)) return oH - 5; 
      const clampDeg = Math.max(-25, Math.min(25, degrees));
      return oH / 2 - (clampDeg / 25) * (oH * 0.45);
    }

    if (oscilloData.length < 2) return;

    oCtx.strokeStyle = "rgba(234, 179, 8, 0.4)";
    oCtx.lineWidth = 2;
    oCtx.setLineDash([4, 4]);
    oCtx.beginPath();
    oCtx.moveTo(0, mapPitchToY(oscilloData[0].target));
    for (let i = 1; i < oscilloData.length; i++) {
      const x = (i / (maxOscilloPoints - 1)) * oW;
      const y = mapPitchToY(oscilloData[i].target);
      oCtx.lineTo(x, y);
    }
    oCtx.stroke();
    oCtx.setLineDash([]);

    oCtx.strokeStyle = simStatus === "crashed" ? "rgba(244, 63, 94, 0.95)" : "rgba(99, 102, 241, 0.95)";
    oCtx.lineWidth = 3;
    
    oCtx.shadowBlur = 8;
    oCtx.shadowColor = simStatus === "crashed" ? "hsl(340, 80%, 55%)" : "hsl(217, 91%, 60%)";

    oCtx.beginPath();
    oCtx.moveTo(0, mapPitchToY(oscilloData[0].actual));
    for (let i = 1; i < oscilloData.length; i++) {
      const x = (i / (maxOscilloPoints - 1)) * oW;
      const y = mapPitchToY(oscilloData[i].actual);
      oCtx.lineTo(x, y);
    }
    oCtx.stroke();

    oCtx.shadowBlur = 0; 
  }

  function setupSimulatorEventListeners() {
    const controllerMode = document.getElementById("sim-controller-mode");
    const btnInjectNan = document.getElementById("btn-inject-nan");
    const btnInjectZeroDt = document.getElementById("btn-inject-zerodt");
    const btnResetSim = document.getElementById("btn-reset-sim");

    if (controllerMode) {
      controllerMode.addEventListener("change", () => {
        simMode = controllerMode.value;
        appendTerminalLine("info", `Flight Simulator: Attitude Loop mode changed to = ${simMode.toUpperCase()}`);
        recoverDrone();
      });
    }

    if (btnInjectNan) {
      btnInjectNan.addEventListener("click", () => {
        if (simMode === "safe") {
          appendTerminalLine("z3", "Hazard: NaN sensor value detected. Safe Rollback wrapper intercepting violation!");
          simStatus = "rollback";
        } else {
          appendTerminalLine("error", "CRITICAL FAULT: NaN mutated AC_PID integrator directly! Sensor loops locked up!");
          cppIntegrator = NaN;
          cppErrorFilterOutput = NaN;
          simStatus = "crashed";
        }
      });
    }

    if (btnInjectZeroDt) {
      btnInjectZeroDt.addEventListener("click", () => {
        if (simMode === "safe") {
          appendTerminalLine("z3", "Hazard: dt = 0 loop frequency violation. Safe wrapper blocked execution to prevent div-by-zero!");
          simStatus = "rollback";
        } else {
          appendTerminalLine("error", "CRITICAL FAULT: dt = 0 triggered numeric overflow division. Legacy C++ output becomes NaN!");
          dt = 0;
          simStatus = "crashed";
        }
      });
    }

    if (btnResetSim) {
      btnResetSim.addEventListener("click", () => {
        recoverDrone();
      });
    }
  }

  function recoverDrone() {
    pitch = 0.0;
    pitchRate = 0.0;
    dt = 0.01;
    
    safeIntegrator = 0.0;
    safeLastError = 0.0;
    safeErrorFilterOutput = 0.0;

    cppIntegrator = 0.0;
    cppLastError = 0.0;
    cppErrorFilterOutput = 0.0;

    simStatus = "stable";
    
    if (particleSystem) {
      particleSystem.visible = false;
    }
    
    appendTerminalLine("success", "Flight Simulator: Attitude loop recovered. Quadcopter hovering stably.");
  }
});
