/**
 * Use-case storyboard renderer — one flowchart per UseCaseDecl,
 * showing the scenario shape at a glance: actors on the left,
 * trigger entering the use-case node, success and failure commitments
 * as parallel outcomes on the right.
 *
 * Unlike the type and relation diagrams, which are whole-file, this
 * emits one diagram per use-case. For files with many use-cases we
 * concatenate the diagrams with a blank line separator; a typical
 * viewer renders each as its own figure. If the file has no
 * use-cases, returns the empty string — the caller can check for
 * this and suppress the section in documentation.
 *
 * Design choice: we concatenate Mermaid blocks without wrapping in
 * ```mermaid fences — that formatting is a markdown concern, not a
 * Mermaid concern. Callers embed the output inside their markdown
 * template with their own fences. This keeps the viz module free
 * of presentation layer mixing.
 */

import type { OntoFile, UseCaseDecl } from "../ast/index.js";

export function renderUseCaseDiagrams(file: OntoFile): string {
  const parts: string[] = [];
  for (const d of file.declarations) {
    if (d.kind !== "UseCaseDecl") continue;
    parts.push(renderOne(d));
  }
  return parts.join("\n\n");
}

function renderOne(uc: UseCaseDecl): string {
  const lines: string[] = [`flowchart LR`, `  %% use-case: ${uc.name}`];

  // Actors — each on its own node, connected to the UC with dashed
  // arrow. An actor list can be empty (S34 doesn't require ≥ 1);
  // we render a single "(no actors)" placeholder to keep the output
  // layout consistent.
  if (uc.actors.length === 0) {
    lines.push(`  NoActors(["(no actors)"])`);
    lines.push(`  NoActors -. actor .-> ${uc.name}`);
  } else {
    for (const actor of uc.actors) {
      lines.push(`  ${actor}["${actor}"]`);
      lines.push(`  ${actor} -. actor .-> ${uc.name}`);
    }
  }

  // The use-case node itself as a stadium (perdurant shape, same as
  // the relation diagram's convention).
  lines.push(`  ${uc.name}(["${uc.name}<br/>«UseCase»"])`);

  // Trigger enters the UC with a thick arrow. If the trigger is the
  // UC's own name (self-triggering, which would be unusual but not
  // forbidden), we still render it — the self-arrow will show.
  lines.push(`  ${uc.trigger}["${uc.trigger}"]`);
  lines.push(`  ${uc.trigger} ==> ${uc.name}`);

  // Outcomes. Success and failure can be the same commitment; we
  // check for that and emit a single joint edge rather than two
  // overlapping ones, which would render confusingly.
  if (uc.success === uc.failure) {
    lines.push(`  ${uc.success}["${uc.success}<br/>«Commitment»"]`);
    lines.push(`  ${uc.name} -- "success / failure" --> ${uc.success}`);
  } else {
    lines.push(`  ${uc.success}["${uc.success}<br/>«Commitment»"]`);
    lines.push(`  ${uc.failure}["${uc.failure}<br/>«Commitment»"]`);
    lines.push(`  ${uc.name} -- success --> ${uc.success}`);
    lines.push(`  ${uc.name} -- failure --> ${uc.failure}`);
  }

  return lines.join("\n");
}
