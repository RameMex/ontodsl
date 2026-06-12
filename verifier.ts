import { Project, SyntaxKind, type SourceFile } from "ts-morph"
import type { VerifyFn, VerificationResult, Violation } from "./types.js"

class DialogVerifier {
  private file: SourceFile
  private violations: Violation[] = []
  private dialogElements: Map<string, Array<{ element: any; parent?: any }>> = new Map()

  constructor(code: string) {
    const project = new Project({ useInMemoryFileSystem: true })
    try {
      this.file = project.createSourceFile("component.tsx", code, {
        overwrite: true,
      })
    } catch {
      this.file = project.createSourceFile("component.tsx", "", {
        overwrite: true,
      })
    }
    this.indexDialogElements()
  }

  verify(): Violation[] {
    this.violations = []

    // Structure rules
    this.checkTriggerOutsideRoot()
    this.checkContentWithoutTitle()
    this.checkMultipleTitles()
    this.checkPortalNested()

    // Props rules
    this.checkControlledNoHandler()
    this.checkMixedControl()
    this.checkInvalidProps()

    // Semantics rules
    this.checkHandlerNoStateUpdate()
    this.checkPreventWithoutHandler()

    // A11y rules
    this.checkTriggerNoName()
    this.checkTitleEmpty()
    this.checkCloseNoName()

    return this.violations
  }

  private indexDialogElements() {
    const allElements = this.file.getDescendantsOfKind(SyntaxKind.JsxOpeningElement)

    for (const element of allElements) {
      const tagName = this.getTagName(element)
      if (!tagName.startsWith("Dialog.")) continue

      const partName = tagName.replace("Dialog.", "")
      if (!this.dialogElements.has(partName)) {
        this.dialogElements.set(partName, [])
      }

      const parent = element.getParent?.()
      this.dialogElements.get(partName)!.push({ element, parent })
    }
  }

  private getTagName(element: any): string {
    try {
      return element.getTagNameNode?.()?.getText?.() || ""
    } catch {
      return ""
    }
  }

  private getJsxAttribute(element: any, attrName: string) {
    try {
      const attributes = element.getAttributes?.() || []
      for (const attr of attributes) {
        if (attr.getKind?.() === SyntaxKind.JsxAttribute) {
          if (attr.getName?.()?.getText?.() === attrName) {
            return attr.getInitializer?.()
          }
        }
      }
    } catch {
      // ignore
    }
    return null
  }

  private hasAncestorDialogPart(element: any, partName: string): boolean {
    try {
      let current = element.getParent?.()
      while (current) {
        let tagName = ""

        // If it's a JsxElement, get the opening element first
        if (current.getKind?.() === SyntaxKind.JsxElement) {
          const opening = current.getOpeningElement?.()
          tagName = opening ? this.getTagName(opening) : ""
        } else {
          tagName = this.getTagName(current)
        }

        if (tagName === `Dialog.${partName}`) {
          return true
        }
        current = current.getParent?.()
      }
    } catch {
      // ignore
    }
    return false
  }

  private getLocation(element: any) {
    try {
      const pos = element.getStart?.()
      if (pos === undefined) return undefined
      const file = element.getSourceFile?.()
      const { line, column } = file.getLineAndColumnAtPosition?.(pos) || { line: 0, column: 0 }
      return { line, column }
    } catch {
      return undefined
    }
  }

  private getDirectChildren(element: any, partName: string): any[] {
    const result = []
    try {
      // For a JsxOpeningElement, the parent is a JsxElement that contains the children
      const jsxElement = element.getParent?.()
      if (!jsxElement) return result

      // Use getJsxChildren to get actual JSX children (not text/whitespace nodes)
      const jsxChildren = jsxElement.getJsxChildren?.() || []
      for (const child of jsxChildren) {
        const opening = child.getOpeningElement?.()
        if (opening) {
          const tagName = this.getTagName(opening)
          if (tagName === `Dialog.${partName}`) {
            result.push(child)
          }
        } else {
          // For self-closing elements
          const tagName = this.getTagName(child)
          if (tagName === `Dialog.${partName}`) {
            result.push(child)
          }
        }
      }
    } catch {
      // ignore
    }
    return result
  }

  private hasDirectChild(element: any, partName: string): boolean {
    return this.getDirectChildren(element, partName).length > 0
  }

  private hasDescendant(element: any, partName: string): boolean {
    // Check if any descendant (not just direct child) is a Dialog part
    const jsxElement = element.getParent?.()
    if (!jsxElement) return false

    const descendants = this.file
      .getDescendantsOfKind(SyntaxKind.JsxOpeningElement)
      .filter((el) => {
        const tagName = this.getTagName(el)
        return tagName === `Dialog.${partName}`
      })

    for (const desc of descendants) {
      // Check if this descendant is within our element
      if (this.isDescendantOf(desc, jsxElement)) {
        return true
      }
    }
    return false
  }

  private isDescendantOf(node: any, ancestor: any): boolean {
    let current = node.getParent?.()
    while (current) {
      if (current === ancestor) return true
      current = current.getParent?.()
    }
    return false
  }

  private getElementText(element: any): string {
    try {
      // Get the parent JSX element
      const jsxElement = element.getParent?.()
      if (!jsxElement) return ""

      const texts = []
      const jsxChildren = jsxElement.getJsxChildren?.() || []

      for (const child of jsxChildren) {
        const kind = child.getKind?.()

        // Direct text node in JSX
        if (kind === SyntaxKind.JsxText) {
          const text = child.getText?.()?.trim()
          if (text) texts.push(text)
        }

        // Element child - check its content
        if (kind === SyntaxKind.JsxElement || kind === SyntaxKind.JsxSelfClosingElement) {
          const elemChildren = child.getJsxChildren?.() || []
          for (const ec of elemChildren) {
            if (ec.getKind?.() === SyntaxKind.JsxText) {
              const text = ec.getText?.()?.trim()
              if (text) texts.push(text)
            }
          }
        }
      }

      return texts.filter(Boolean).join(" ")
    } catch {
      return ""
    }
  }

  private hasElementText(element: any): boolean {
    const text = this.getElementText(element)
    return text.length > 0
  }

  private addViolation(violation: Violation) {
    this.violations.push(violation)
  }

  // ─── Structure rules ─────────────────────────────────────────

  private checkTriggerOutsideRoot() {
    const triggers = this.dialogElements.get("Trigger") || []
    for (const { element } of triggers) {
      if (!this.hasAncestorDialogPart(element, "Root")) {
        this.addViolation({
          ruleId: "S-trigger-outside-root",
          category: "structure",
          severity: "error",
          message: "Dialog.Trigger must be a descendant of Dialog.Root",
          location: this.getLocation(element),
          evidence: element.getText?.(),
        })
      }
    }
  }

  private checkContentWithoutTitle() {
    const contents = this.dialogElements.get("Content") || []
    for (const { element } of contents) {
      // Changed from hasDirectChild to hasDescendant
      // Title can be nested in divs/wrappers, not just direct children
      if (!this.hasDescendant(element, "Title")) {
        this.addViolation({
          ruleId: "S-content-without-title",
          category: "structure",
          severity: "error",
          message: "Dialog.Content must contain a Dialog.Title",
          location: this.getLocation(element),
          evidence: element.getText?.(),
        })
      }
    }
  }

  private checkMultipleTitles() {
    const contents = this.dialogElements.get("Content") || []
    for (const { element } of contents) {
      const titles = this.getDirectChildren(element, "Title")
      if (titles.length > 1) {
        this.addViolation({
          ruleId: "S-multiple-titles",
          category: "structure",
          severity: "error",
          message: "Dialog.Content must have exactly one Dialog.Title child",
          location: this.getLocation(element),
          evidence: element.getText?.(),
        })
      }
    }
  }

  private checkPortalNested() {
    const portals = this.dialogElements.get("Portal") || []
    for (const { element } of portals) {
      // Skip the immediate parent (which is this element's JsxElement)
      // Start from grandparent
      let current = element.getParent?.()?.getParent?.()

      let foundAncestorPortal = false
      while (current) {
        if (current.getKind?.() === SyntaxKind.JsxElement) {
          const opening = current.getOpeningElement?.()
          const tagName = opening ? this.getTagName(opening) : ""
          if (tagName === "Dialog.Portal") {
            foundAncestorPortal = true
            break
          }
        }
        current = current.getParent?.()
      }

      if (foundAncestorPortal) {
        this.addViolation({
          ruleId: "S-portal-nested",
          category: "structure",
          severity: "error",
          message: "Dialog.Portal cannot be nested inside another Dialog.Portal",
          location: this.getLocation(element),
          evidence: element.getText?.(),
        })
      }
    }
  }

  // ─── Props rules ─────────────────────────────────────────────

  private checkControlledNoHandler() {
    const roots = this.dialogElements.get("Root") || []
    for (const { element } of roots) {
      const hasOpen = this.getJsxAttribute(element, "open") !== null
      const hasHandler = this.getJsxAttribute(element, "onOpenChange") !== null

      if (hasOpen && !hasHandler) {
        this.addViolation({
          ruleId: "P-controlled-no-handler",
          category: "props",
          severity: "error",
          message: "Dialog.Root with 'open' prop must have 'onOpenChange' handler",
          location: this.getLocation(element),
          evidence: element.getText?.(),
        })
      }
    }
  }

  private checkMixedControl() {
    const roots = this.dialogElements.get("Root") || []
    for (const { element } of roots) {
      const hasOpen = this.getJsxAttribute(element, "open") !== null
      const hasDefaultOpen = this.getJsxAttribute(element, "defaultOpen") !== null

      if (hasOpen && hasDefaultOpen) {
        this.addViolation({
          ruleId: "P-mixed-control",
          category: "props",
          severity: "error",
          message: "Dialog.Root cannot have both 'open' and 'defaultOpen' props",
          location: this.getLocation(element),
          evidence: element.getText?.(),
        })
      }
    }
  }

  private checkInvalidProps() {
    const validProps: Record<string, Set<string>> = {
      Root: new Set(["open", "defaultOpen", "onOpenChange", "modal"]),
      Trigger: new Set(["asChild"]),
      Content: new Set(["forceMount", "onEscapeKeyDown", "onPointerDownOutside", "onInteractOutside"]),
      Portal: new Set(),
      Overlay: new Set(),
      Title: new Set(),
      Description: new Set(),
      Close: new Set(),
    }

    for (const [partName, allowed] of Object.entries(validProps)) {
      const elements = this.dialogElements.get(partName) || []
      for (const { element } of elements) {
        try {
          const attributes = element.getAttributes?.() || []
          for (const attr of attributes) {
            if (attr.getKind?.() === SyntaxKind.JsxAttribute) {
              const attrName = attr.getName?.()?.getText?.()
              if (
                attrName &&
                !attrName.startsWith("aria-") &&
                !attrName.startsWith("data-") &&
                !allowed.has(attrName) &&
                attrName !== "key"
              ) {
                this.addViolation({
                  ruleId: "P-invalid-prop",
                  category: "props",
                  severity: "warning",
                  message: `Invalid prop '${attrName}' for Dialog.${partName}`,
                  location: this.getLocation(element),
                  evidence: element.getText?.(),
                })
              }
            }
          }
        } catch {
          // ignore
        }
      }
    }
  }

  // ─── Semantics rules ────────────────────────────────────────

  private checkHandlerNoStateUpdate() {
    const roots = this.dialogElements.get("Root") || []
    for (const { element } of roots) {
      const handler = this.getJsxAttribute(element, "onOpenChange")
      if (handler) {
        const text = handler.getText?.() || ""
        const hasUpdate = text.includes("setState") || text.includes("set") || text.includes("=>")
        if (!hasUpdate) {
          this.addViolation({
            ruleId: "SE-handler-no-state-update",
            category: "semantics",
            severity: "warning",
            message: "onOpenChange handler should update component state",
            location: this.getLocation(element),
            evidence: handler.getText?.(),
          })
        }
      }
    }
  }

  private checkPreventWithoutHandler() {
    const contents = this.dialogElements.get("Content") || []
    for (const { element } of contents) {
      const hasEscHandler = this.getJsxAttribute(element, "onEscapeKeyDown") !== null
      const text = element.getText?.() || ""
      if (!hasEscHandler && text.includes("preventDefault")) {
        this.addViolation({
          ruleId: "SE-prevent-without-handler",
          category: "semantics",
          severity: "warning",
          message: "Content preventing Esc should have onEscapeKeyDown handler with preventDefault",
          location: this.getLocation(element),
          evidence: element.getText?.(),
        })
      }
    }
  }

  // ─── A11y rules ─────────────────────────────────────────────

  private checkTriggerNoName() {
    const triggers = this.dialogElements.get("Trigger") || []
    for (const { element } of triggers) {
      const hasAriaLabel = this.getJsxAttribute(element, "aria-label") !== null
      const hasText = this.hasElementText(element)

      // If using asChild, check aria-label in child elements (button, etc)
      const hasAsChild = this.getJsxAttribute(element, "asChild") !== null
      let hasNameInChild = false
      if (hasAsChild) {
        const parent = element.getParent?.()
        const jsxChildren = parent?.getJsxChildren?.() || []
        for (const child of jsxChildren) {
          const childAriaLabel = this.getJsxAttribute(child, "aria-label")
          const childText = this.hasElementText(child)
          if (childAriaLabel || childText) {
            hasNameInChild = true
            break
          }
        }
      }

      if (!hasAriaLabel && !hasText && !hasNameInChild) {
        this.addViolation({
          ruleId: "A-trigger-no-name",
          category: "a11y",
          severity: "error",
          message: "Dialog.Trigger must have either text content or an 'aria-label'",
          location: this.getLocation(element),
          evidence: element.getText?.(),
        })
      }
    }
  }

  private checkTitleEmpty() {
    const titles = this.dialogElements.get("Title") || []
    for (const { element } of titles) {
      const text = this.getElementText(element)

      // Check for JSX expressions (e.g., {title}, {condition ? a : b})
      const fullText = element.getText?.() || ""
      const hasJSXExpression = fullText.includes("{") && fullText.includes("}")

      // If only literal text is empty AND no JSX expressions, it's a violation
      if ((!text || text.trim() === "") && !hasJSXExpression) {
        this.addViolation({
          ruleId: "A-title-empty",
          category: "a11y",
          severity: "error",
          message: "Dialog.Title must have non-empty text content",
          location: this.getLocation(element),
          evidence: element.getText?.(),
        })
      }
    }
  }

  private checkCloseNoName() {
    const closes = this.dialogElements.get("Close") || []
    for (const { element } of closes) {
      const hasAriaLabel = this.getJsxAttribute(element, "aria-label") !== null
      const hasText = this.hasElementText(element)

      // If using asChild, check aria-label in child elements (button, etc)
      const hasAsChild = this.getJsxAttribute(element, "asChild") !== null
      let hasNameInChild = false
      if (hasAsChild) {
        const parent = element.getParent?.()
        const jsxChildren = parent?.getJsxChildren?.() || []
        for (const child of jsxChildren) {
          const childAriaLabel = this.getJsxAttribute(child, "aria-label")
          const childText = this.hasElementText(child)
          if (childAriaLabel || childText) {
            hasNameInChild = true
            break
          }
        }
      }

      if (!hasAriaLabel && !hasText && !hasNameInChild) {
        this.addViolation({
          ruleId: "A-close-no-name",
          category: "a11y",
          severity: "warning",
          message: "Dialog.Close should have either text content or an 'aria-label'",
          location: this.getLocation(element),
          evidence: element.getText?.(),
        })
      }
    }
  }
}

const verify: VerifyFn = (input) => {
  const start = Date.now()

  try {
    const verifier = new DialogVerifier(input.generatedCode)
    const violations = verifier.verify()

    const stats = {
      errors: violations.filter(v => v.severity === "error").length,
      warnings: violations.filter(v => v.severity === "warning").length,
      byCategory: {
        structure: violations.filter(v => v.category === "structure").length,
        props: violations.filter(v => v.category === "props").length,
        semantics: violations.filter(v => v.category === "semantics").length,
        a11y: violations.filter(v => v.category === "a11y").length,
      },
    }

    return {
      passed: stats.errors === 0,
      violations,
      stats,
      durationMs: Date.now() - start,
    }
  } catch (e) {
    return {
      passed: false,
      violations: [
        {
          ruleId: "S-parse-error",
          category: "structure",
          severity: "error",
          message: `Failed to parse component: ${e instanceof Error ? e.message : String(e)}`,
        },
      ],
      stats: {
        errors: 1,
        warnings: 0,
        byCategory: {
          structure: 1,
          props: 0,
          semantics: 0,
          a11y: 0,
        },
      },
      durationMs: Date.now() - start,
    }
  }
}

export default verify
