import Link from "next/link";
import React, { Suspense } from "react";
import { FaGithub, FaMedium, FaLinkedin } from "react-icons/fa";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav className="bg-slate-400 p-4 sticky top-0 z-10 drop-shadow-xl">
      <div
        className="prose prose-xl mx-auto flex justify-evenly flex-col  sm:flex-row align-middle
      
      "
      >
        <h1 className="text-2xl sm:text-lg font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href={"/"}
            className="text-white/90  no-underline hover:text-white"
          >
            {" "}
            Home
          </Link>
        </h1>

        <h1 className="text-2xl sm:text-lg font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href={"/projects"}
            className="text-white/90  no-underline hover:text-white"
          >
            {" "}
            Projects
          </Link>
        </h1>

        <h1 className="text-2xl sm:text-lg font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href={"/posts"}
            className="text-white/90  no-underline hover:text-white"
          >
            {" "}
            Blog
          </Link>
        </h1>
        <h1 className="text-2xl sm:text-lg font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href={"/talks"}
            className="text-white/90  no-underline hover:text-white"
          >
            {" "}
            Talks
          </Link>
        </h1>

        {/* <h1 className='text-2xl sm:text-lg font-bold text-white grid place-content-center mb-2 md:mb-0'>
          <a href={'https://kaung-zin-hein.ck.page/a33fa9d0bc'} target="_blank" rel="noopener noreferrer" className='text-white/90  no-underline hover:text-white'> Newsletter
          </a>
        </h1> */}

          <div
            id="search-bar"
            className=" grid place-content-center mb-2 md:mb-0"
          >
            <SearchBar />
          </div>

        <div
          id="all-social-links"
          className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl"
        >
          <Link
            href={"https://medium.com/@kaungzinhein"}
            className="text-white/90 hover:text-white"
          >
            <FaMedium />
          </Link>

          <Link
            href={"https://github.com/Zen-cronic"}
            className="text-white/90 hover:text-white"
          >
            <FaGithub />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/kaung-zin-hein-4284a2258"}
            className="text-white/90 hover:text-white"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
