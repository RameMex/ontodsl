import { describe, it, expect } from "vitest";
import { parse } from "../src/parser/index.js";

const withPreamble = (body: string): string =>
  `schema "onto/0.1"; namespace t;\n${body}`;

describe("phase3.5 — explicit relations", () => {
  it("parses relations with different multiplicities", () => {
    const { ast, errors } = parse(
      withPreamble(`
        category Base { property a: Real; }
        kind Drone specializes Base { identity: id; property id: String; }
        kind Battery { identity: bid; property bid: String; }
        
        relation hasBat: <<componentOf>> from Drone [1] to Battery [1..*];
        relation optBat: <<componentOf>> from Drone [0..1] to Battery [*];
        relation exactBats: <<componentOf>> from Drone [1] to Battery [4..4];
      `)
    );
    expect(errors).toEqual([]);
    expect(ast).not.toBeNull();
    const relations = ast!.declarations.filter(d => d.kind === "RelationDecl");
    expect(relations.length).toBe(3);
    
    // @ts-expect-error test assertion
    expect(relations[0].sourceMultiplicity.lower).toBe(1);
    // @ts-expect-error test assertion
    expect(relations[0].sourceMultiplicity.upper).toBe(1);
    // @ts-expect-error test assertion
    expect(relations[0].targetMultiplicity.upper).toBe("*");
    
    // @ts-expect-error test assertion
    expect(relations[1].sourceMultiplicity.lower).toBe(0);
    // @ts-expect-error test assertion
    expect(relations[1].targetMultiplicity.lower).toBe(0);
  });

  it("fails [S23] if endpoints do not resolve", () => {
    const { errors } = parse(
      withPreamble(`
        category C { property p: Real; }
        relation r: <<componentOf>> from C [1] to Missing [1];
      `)
    );
    expect(errors.some(e => e.code === "S23" && /target 'Missing'/.test(e.message))).toBe(true);
  });

  it("fails [S25] on bad multiplicities", () => {
    const { errors } = parse(
      withPreamble(`
        category C { property p: Real; }
        kind K { identity: i; property i: String; }
        relation r: <<componentOf>> from C [5..1] to K [1];
      `)
    );
    expect(errors.some(e => e.code === "S25" && e.message.includes("lower bound (5) cannot be greater than upper bound (1)"))).toBe(true);
  });

  it("enforces [S24] for <<characterization>>", () => {
    const { errors } = parse(
      withPreamble(`
        kind Drone { identity: id; property id: String; }
        mode BatteryHealth of Drone { property pct: Real; }
        kind Pilot { identity: pid; property pid: String; }
        
        // Good
        relation r1: <<characterization>> from BatteryHealth [1] to Drone [1];
        // Bad target
        relation r2: <<characterization>> from BatteryHealth [1] to Pilot [1];
        // Bad source
        relation r3: <<characterization>> from Drone [1] to Pilot [1];
      `)
    );
    expect(errors.some(e => e.code === "S24" && /target 'Pilot' must match the aspect's bearer 'Drone'/.test(e.message))).toBe(true);
    expect(errors.some(e => e.code === "S24" && /source must be a Mode or Quality/.test(e.message))).toBe(true);
  });

  it("enforces [S24] for <<mediation>>", () => {
    const { errors } = parse(
      withPreamble(`
        kind Flight { identity: id; property id: String; }
        kind Pilot { identity: pid; property pid: String; }
        relator PilotAssignment mediates (Flight, Pilot) { identity: aid; property aid: String; }
        kind Passenger { identity: ppid; property ppid: String; }
        
        // Good
        relation r1: <<mediation>> from PilotAssignment [1] to Pilot [1..*];
        // Bad target (Passenger not mediated by PilotAssignment)
        relation r2: <<mediation>> from PilotAssignment [1] to Passenger [1];
        // Bad source
        relation r3: <<mediation>> from Pilot [1] to Flight [1];
      `)
    );
    expect(errors.some(e => e.code === "S24" && /target 'Passenger' is not among the participants/.test(e.message))).toBe(true);
    expect(errors.some(e => e.code === "S24" && /source must be a Relator/.test(e.message))).toBe(true);
  });

  it("enforces [S24] for <<componentOf>>", () => {
    const { errors } = parse(
      withPreamble(`
        kind Part { identity: pid; property pid: String; }
        kind Whole { identity: wid; property wid: String; }
        category Abs { property z: Real; }
        
        // Good
        relation c1: <<componentOf>> from Part [1..*] to Whole [1];
        // Bad (Category Abs is non-sortal)
        relation c2: <<componentOf>> from Part [1..*] to Abs [1];
      `)
    );
    expect(errors.some(e => e.code === "S24" && /target must be a sortal/.test(e.message))).toBe(true);
  });
  
  it("allows «guillemet» characters interchangeably", () => {
    const { ast, errors } = parse(
      withPreamble(`
        kind Drone { identity: id; property id: String; }
        kind Battery { identity: bid; property bid: String; }
        relation r1: «componentOf» from Drone [1] to Battery [1..*];
      `)
    );
    expect(errors).toEqual([]);
    const relations = ast!.declarations.filter(d => d.kind === "RelationDecl");
    // @ts-expect-error test assertion
    expect(relations[0].stereotype).toBe("componentOf");
  });
});
