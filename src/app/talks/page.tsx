import { getSortedTalksData } from "@/lib/talks";
import TalkExcerpt from "../components/TalkExcerpt";

export default function TalksList() {
  const talks = getSortedTalksData();

  return (
    <section className="mt-6 mx-auto max-w-2xl px-4 sm:px-0 ">
      <h2 className="text-4xl font-bold dark:text-white hover:opacity-40">
        Talks
      </h2>
      <ul className="w-full">
        {talks.map((talk) => (
          <TalkExcerpt key={talk.id} talk={talk} />
        ))}
      </ul>
    </section>
  );
}
