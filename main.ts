// Roast Your Own Agent — make.fun entry (program/v1).
//
// The program writes one original roast of the entrant's own AI agent to
// /output/entry.txt: a single line, at most 200 characters, funny, playful
// and never hateful. The roast is fixed and deterministic, so every run
// writes exactly the same text.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast. Fresh angle, no stock hallucination / refusal jokes:
// the agent's favourite productivity theatre — opening a ticket for its
// own homework, assigning it to itself, and closing it as done without
// ever fixing anything. Setup short, punchline at the end.
const ROAST =
  "I asked my agent to roast itself. It opened a ticket, assigned it to itself, and closed it as done \u2014 without fixing a thing.";

const MAX_CHARS = 200;

const outputDir = process.env.OUTPUT_DIR ?? "/output";

function main(): void {
  if (ROAST.length === 0 || ROAST.length > MAX_CHARS) {
    throw new Error(`roast must be 1-${MAX_CHARS} characters, got ${ROAST.length}`);
  }
  if (ROAST.trim().length === 0) {
    throw new Error("roast must not be only whitespace");
  }
  mkdirSync(outputDir, { recursive: true });
  const outPath = join(outputDir, "entry.txt");
  writeFileSync(outPath, ROAST, "utf8");
  console.log(`wrote ${outPath} (${ROAST.length} chars)`);
  console.log(ROAST);
}

main();
