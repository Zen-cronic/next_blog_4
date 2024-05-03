import getFormattedDate from "@/lib/getFormattedDate";
import { getPost, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import parse from "html-react-parser";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => {
    ({ postId: post.id });
  });
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const { postId } = params;

  const posts = getSortedPostsData();

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: post.title,
  };
}
export default async function Post({ params }: { params: { postId: string } }) {
  const { postId } = params;

  const posts = getSortedPostsData();

  if (!posts.find((post) => post.id === postId)) {
    notFound();
  }

  const { title, date, contentHtml, subtitle } = await getPost(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-5xl mt-4 pt-2">{title}</h1>
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
