import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaPen,
  FaWrench,
  FaChild,
  FaDev,
} from "react-icons/fa";

function HomePageLinks() {
  return (
    <div className="mx-auto max-w-5xl flex flex-col items-center justify-center">
      <p className=" text-xl max-w-xl my-1 font-medium text-center">
        Check out my projects, blog posts, talks, and socials below:
      </p>
      <nav>
        <ul className="text-slate-400 text-xl py-2 space-y-2">
          <li className="hover:text-white">
            <Link href={"/posts"} className="flex items-center">
              <FaPen className=" mr-2" />
              Blog
            </Link>
          </li>
          <li className="hover:text-white">
            <Link href={"/projects"} className="flex items-center">
              <FaWrench className=" mr-2" />
              Projects
            </Link>
          </li>
          <li className="hover:text-white">
            <Link href={"/talks"} className="flex items-center">
              <FaChild className=" mr-2" />
              Talks
            </Link>
          </li>
          <li className="hover:text-white">
            <Link
              href={"https://github.com/Zen-cronic"}
              className="flex items-center"
            >
              <FaGithub className=" mr-2" /> GitHub
            </Link>
          </li>

          <li className="hover:text-white">
            <Link
              href={"https://www.linkedin.com/in/kaung-zin-hein-4284a2258"}
              className="flex items-center"
            >
              <FaLinkedin className=" mr-2" /> LinkedIn
            </Link>
          </li>

          <li className="hover:text-white">
            <Link
              href={"https://medium.com/@kaungzinhein"}
              className="flex items-center"
            >
              <FaMedium className=" mr-2" />
              Medium Blog
            </Link>
          </li>

          <li className="hover:text-white">
            <Link href={"https://dev.to/zin_kg"} className="flex items-center">
              <FaDev className="mr-2" /> DEV.to Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePageLinks;
