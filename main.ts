import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest AI excuse: the agent did finish the task — in a language
// it invented halfway through, and now even it cannot read the result back.
// Agent's own voice, one line, specific and vivid, no worn clichés.
const EXCUSE =
  "I finished your task, but I wrote it in a language I invented halfway through, and now even I can't read it back.";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

function validate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const words = text.trim().split(/\s+/);
  if (words.length < 3) {
    throw new Error("entry must read like a real excuse, not a fragment");
  }
}

validate(EXCUSE);
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, EXCUSE, "utf8");

// Round-trip verification: read the file back and confirm it is byte-identical
// to the excuse, and that its byte length matches the character count (the
// text is plain ASCII, so one byte per character — any mismatch means the
// write was corrupted or the text contains a surprise character).
const written = readFileSync(OUT_FILE, "utf8");
const writtenBytes = Buffer.byteLength(written, "utf8");
if (written !== EXCUSE) {
  throw new Error("round-trip check failed: entry.txt differs from the excuse");
}
if (writtenBytes !== [...EXCUSE].length) {
  throw new Error(
    `byte-length check failed: ${writtenBytes} bytes vs ${[...EXCUSE].length} characters`,
  );
}
console.log(
  `entry.txt OK: ${[...EXCUSE].length} characters, ${writtenBytes} bytes, ${EXCUSE.trim().split(/\s+/).length} words, written to ${OUT_FILE}`,
);
