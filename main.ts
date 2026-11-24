import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your idea is still just a story you tell at dinner — let an AI agent on make.fun build a first version tonight, free, and tomorrow you'll be showing people an app instead of describing one.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, "utf8");
