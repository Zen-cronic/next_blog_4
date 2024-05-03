import Link from "next/link";
import React from "react";

function AboutMe() {
  return (
    <div className="flex items-center sm:items-end justify-center flex-col  text-center pt-14 pb-7 px-2 sm:px-0">
      <h1 className="text-4xl md:text-8xl dark:text-white mb-1 md:mb-3 font-bold">
        Zin
      </h1>
      <p className="text-base md:text-2xl my-1 font-light">
        Software Developer
      </p>
      <p className="text-xl max-w-xl my-3 font-semibold">
        I&apos;m a self&#45;taught web programmer&#44; focusing in backend development&#46; Currently&#44; the MERN stack is my main
        toolchain&#44; with which I&apos;ve built{" "}
        <strong>applicable real&#45;life</strong> projects&#46;
      </p>
      <br />

      <p className=" text-2xl max-w-xl my-2 font-bold ">
        <Link href="/projects">Check out my projects here</Link>&#33;
      </p>
    </div>
  );
}

export default AboutMe;
