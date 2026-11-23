// The Vacuum's Alibi: one line, 200 characters or fewer (this one is 85).
// Node 22 stdlib only. No rendering, no network, no Chrome.
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// The line is a deadpan first-person excuse: sensor smugness up front,
// a surprise turn on "load-bearing", and the punch ("not a structural
// engineer") sitting at the end, every word earning its place.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Per my sensors, that crumb is load-bearing. I am a vacuum, not a structural engineer.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
