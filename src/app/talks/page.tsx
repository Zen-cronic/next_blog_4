import TALKS from "@/constants/talksInfo";
import React from "react";
import TalkExcerpt from "../components/TalkExcerpt";

function TalksList() {
  return (
    <div className="mx-auto max-w-5xl">
      {/* grid-rows-3  */}
      <div className="grid gap-5 justify-center items-center mt-6">
        {TALKS.map((talk, idx) => (
          <TalkExcerpt talk={talk} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default TalksList;
