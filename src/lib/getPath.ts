import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

export function getContentDir(lastSegment: string): string {

  // C:\...\next_blog_4\.next\server\app\talks\content\talks  DNE
  //  const dir = getDir(__dirname, "..", "content", lastSegment);


  // const dir = getDir("src/content", lastSegment);

  const __dirname = path.dirname(fileURLToPath(import.meta.url));

  //content in public

  //'C:\...\next_blog_4\\public\\content\\talks' Exists!
  // const dir = getDir(process.cwd() , "public", "content", lastSegment)
  // const dir = getDir(__dirname , "..", "..", "content", lastSegment)

  const dir = getDir(process.cwd(), "content", lastSegment)

  // const dir = getDir(process.cwd(), "..", ".." , "public", "content", lastSegment)


  return dir;
}

export function getFullPath() {}

function getDir(...args: string[]) {

  const dir = path.join(...args)
  console.info({dir})

  if (!fs.existsSync(dir)) {
    throw new Error(`Dir Does Not Exist: ${dir}`);
  }

  return dir;
}
