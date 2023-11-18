import { Project } from "@/types/project";

const projects: Project[] = [
  {
    title: "Volunteer Application",
    skillStack: ["MERN", "REST Api"],
    sourceCodeLink: "https://github.com/Zen-cronic/volun-mern",
    link: "https://volunteer-mern.vercel.app/",
    description:
      "MERN full stack web app for both volunteers and adminstrators",
      imgUrl: "/img/volunteer-mern-sc.jpg",
  },

  {
    title: "Personal Blog/Portfolio Website",
    skillStack: ["NextJS", "Tailwind CSS"],
    sourceCodeLink: "https://github.com/Zen-cronic/next_blog_4",
    link: "https://www.kaungzinhein.me/",
    description: "My portfolio including projects and blog posts",
    imgUrl: "/img/next-blog-sc.jpg"
  },
];

export default projects;
