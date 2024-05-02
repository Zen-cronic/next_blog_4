import path from "path";
import fs from "fs";

export default function getContentDir(lastSegment: string): string {
  const dir = path.join(process.cwd(), "src/content", lastSegment);

  if (!fs.existsSync(dir)) {
    throw new Error(`Dir Does Not Exist: ${dir}`);
  }

  return dir;
}
