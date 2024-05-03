import path from "path";
import fs from "fs";

export function getContentDir(lastSegment: string): string {
  const dir = getDir("src/content", lastSegment);

  return dir;
}

export function getFullPath() {}

function getDir(...args: string[]) {
  const dir = path.join(process.cwd(), ...args);

  if (!fs.existsSync(dir)) {
    throw new Error(`Dir Does Not Exist: ${dir}`);
  }

  return dir;
}
