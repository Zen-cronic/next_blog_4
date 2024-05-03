import getFormattedDate from "@/lib/getFormattedDate";
import { getTalk, getSortedTalksData } from "@/lib/talks";
import Link from "next/link";
import parse from "html-react-parser";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const talks = getSortedTalksData();

  return talks.map((talk) => {
    ({ talkId: talk.id });
  });
}

export function generateMetadata({ params }: { params: { talkId: string } }) {
  const { talkId } = params;

  const talks = getSortedTalksData();

  const talk = talks.find((talk) => talk.id === talkId);

  if (!talk) {
    return {
      title: "Talk not found",
    };
  }

  return {
    title: talk.title,
  };
}
export default async function Talk({ params }: { params: { talkId: string } }) {
  const { talkId } = params;

  const talks = getSortedTalksData();

  if (!talks.find((talk) => talk.id === talkId)) {
    notFound();
  }

  const { title, date, contentHtml, subtitle } = await getTalk(talkId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-4xl mt-4 pt-2">{title}</h1>
      <h3 className="text-md hover:opacity-40 mb-0 py-2">{subtitle}</h3>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section>{parse(contentHtml)}</section>
        <p>
          <Link href="/">&lt; To home</Link>
        </p>
      </article>
    </main>
  );
}
