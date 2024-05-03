import { getContentDir } from "./getPath";
import { remark } from "remark";
import remarkHtml from "remark-html";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

const talksDir = getContentDir("talks");

export function getSortedTalksData() {
  const fileNames = fs.readdirSync(talksDir);

  if (!fileNames) {
    console.log("FileNames not found");
    return [];
  }

  const allTalksData = fileNames.map((fileName) => {
    //get fullpath of each md
    const fullPath = path.join(talksDir, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf-8");

    //make id for blogpost obj
    const id = fileName.replace(/\.md$/, "");

    //parse post-metadata section in md file
    const matterResult = matter(fileContent);

    const { data: matterData } = matterResult;

    const talk: Talk = {
      id,
      title: matterData.title,
      subtitle: matterData.subtitle,
      date: matterData.date,
      eventDate: matterData.eventDate,
      eventName: matterData.eventName,
      description: matterData.description,
      imgUrl: matterData.imgUrl,
      slides: matterData.slides,
    };

    return talk;
  });

  return allTalksData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getTalk(id: string) {
  const fullPath = path.join(talksDir, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  const { data: matterData } = matterResult;

  const talkHtml: Talk & { contentHtml: string } = {
    id,
    title: matterData.title,
    date: matterData.date,
    subtitle: matterData.subtitle,
    eventDate: matterData.eventDate,
    eventName: matterData.eventName,
    description: matterData.description,
    imgUrl: matterData.imgUrl,
    slides: matterData.slides,
    contentHtml,
  };

  return talkHtml;
}
