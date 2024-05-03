import Link from "next/link";
import React from "react";

function AboutMe() {
  return (
    <div className="flex items-center sm:items-end justify-center flex-col  text-center pt-14 pb-7 px-2 sm:px-0">
      <h1 className="text-4xl md:text-8xl dark:text-white mb-1 md:mb-3 font-bold">
        Zin
      </h1>
      <p className="text-base md:text-2xl my-1 font-light">
        {"{Software Developer}"}
      </p>
      <p className="text-xl max-w-xl my-3 font-semibold">
        I&apos;m a self&#45;taught programmer&#44; specializing in backend web
        development&#46; Currently&#44; I am focusing on <em>NodeJS</em> and {" "}
        <em>React</em> to create <strong>practical&#44; real&#45;life</strong>{" "}
        projects&#46;
      </p>
      <br />

      <p className=" text-2xl max-w-xl my-2 font-bold ">
        <Link href="/projects">View my projects here</Link>&#33;
      </p>
    </div>
  );
}

export default AboutMe;
