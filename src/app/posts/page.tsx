import { getSortedPostsData } from "@/lib/posts";
import PostExcerpt from "../components/PostExcerpt";

export default function PostsList() {
  const posts = getSortedPostsData();

  return (
    <section className="mt-6 mx-auto max-w-2xl px-4 sm:px-0 ">
      <h2 className="text-4xl font-bold dark:text-white/90">
        Articles so far...
      </h2>
      <ul className="w-full">
        {posts.map((post) => (
          <PostExcerpt key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
