import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TalkExcerptProps {
  talk: Talk;
}

const TalkExcerpt: React.FC<TalkExcerptProps> = ({ talk }) => {
  return (
    <div className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden mb-2">
      <Image
        className="border-black dark:border-slate-500 drop-shadow-xl shadow-black 
      mx-auto mt-6 mb-3 w-full object-cover cursor-pointer"
        src={talk.imgUrl}
        alt="Project Image"
        width={500}
        height={500}
      />
      <div>
        <p className="text-lg">
          <strong>{talk.title} </strong>
        </p>
        <p className="dark:text-slate-400">Description: {talk.description}</p>
        <p className="dark:text-slate-400">Event: {talk.eventName}</p>
        <p className="dark:text-slate-400">Date: {talk.eventName}</p>
      </div>

      <br />

      <Link href={`/talks/${talk.id}`}>
        <p>
          <span className="flex items-center">View more</span>
        </p>
      </Link>
    </div>
  );
};

export default TalkExcerpt;
