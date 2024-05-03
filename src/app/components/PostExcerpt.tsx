import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import React from "react";

type PostExcerptProps = {
  post: BlogPost;
};

export default function PostExcerpt({ post }: PostExcerptProps) {
  const { id, title, date, subtitle } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className=" hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-base font-bold dark:text-slate-400">{subtitle}</p>
      <p className="text-xs mt-1">{formattedDate}</p>
    </li>
  );
}
