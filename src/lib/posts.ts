import { remark } from "remark";
import remarkHtml from "remark-html";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import getContentDir from "./getContentDir";

const postsDir = getContentDir("blogposts")


export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDir);

  if (!fileNames) {
    console.log("FileNames not found");
    return [];
  }

  const allPostsData = fileNames.map((fileName) => {
    //get fullpath of each md
    const fullPath = path.join(postsDir, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf-8");

    //make id for blogpost obj
    const id = fileName.replace(/\.md$/, "");

    //parse post-metadata section in md file
    const matterResult = matter(fileContent);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
    };

    return blogPost;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

//return a BlogPost with content
export async function getPost(id: string) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const blogPostHtml: BlogPost & { contentHtml: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    subtitle: matterResult.data.subtitle,

    contentHtml,
  };

  return blogPostHtml;
}
