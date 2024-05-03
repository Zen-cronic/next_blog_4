import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

function HomePageLinks() {
  return (
    // <div className="mx-auto max-w-5xl text-center">
    <div className="mx-auto max-w-5xl ">
      <p>Check out my projects, blog posts, talks, and socials below:</p>
      <nav>
        <ul className="flex flex-col items-center justify-center text-start">
          <li className="text-left">
            <Link href={"/posts"}>Blog</Link>
          </li>
          <li className="text-start">
            <Link href={"/projects"}>Projects</Link>{" "}
          </li>
          <li>
            <Link href={"/talks"}>Talks</Link>
          </li>
          <li>
            <Link
              href={"https://github.com/Zen-cronic"}
              className="text-white/90 hover:text-white"
            >
              {/* <FaGithub/>  */}
              GitHub
            </Link>
          </li>
          <Link
            href={"https://www.linkedin.com/in/kaung-zin-hein-4284a2258"}
            className="text-white/90 hover:text-white"
          >
            {/* <FaLinkedin />  */}
            LinkedIn
          </Link>
          <li>
            <Link
              href={"https://medium.com/@kaungzinhein"}
              className="text-white/90 hover:text-white"
            >
              {/* <FaMedium /> */}
              Medium Blog
            </Link>
          </li>

          <li>
            <Link href={"https://dev.to/zin_kg"}>DEV.to Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePageLinks;
