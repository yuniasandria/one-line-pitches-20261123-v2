import { mkdirSync, writeFileSync } from "node:fs";

const PART_A =
  "Your idea is still just a story you tell at dinner — let an AI agent on make.fun build a first version tonight, free, and ";
const PART_B =
  "tomorrow you'll be showing people an app instead of describing one.";
const LINE = PART_A + PART_B;
if (LINE.length < 1 || LINE.length > 240 || LINE.includes("\n")) {
  throw new Error("bad line");
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, "utf8");
