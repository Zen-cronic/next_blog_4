import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TalkExcerptProps {
  talk: Talk;
}

export default function TalkExcerpt({ talk }: TalkExcerptProps) {
  const { description, eventDate, eventName } = talk;
  const formattedDate = getFormattedDate(eventDate);

  return (
    <div className="border-2 border-stone-900 dark:border-slate-400 rounded-md overflow-hidden mb-2 px-2">
      <Link href={`/talks/${talk.id}`}>
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
          <p className="dark:text-slate-400">Description: {description}</p>
          <p className="dark:text-slate-400">Event: {eventName}</p>
          <p className="dark:text-slate-400">Date: {formattedDate}</p>
        </div>

        <br />

        <p>
          <span className="flex items-center">View more</span>
        </p>
      </Link>
    </div>
  );
}
