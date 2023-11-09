"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function SearchBar() {
  const router = useRouter();
  const search = useSearchParams();

  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : null
  );

  const onSearch = (e: FormEvent) => {
    e.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery || "");

    setSearchQuery("");
    router.push(`/search?q=${encodedSearchQuery}`);
  };
  return (
    <form
      onSubmit={onSearch}
      className="dark:text-black-400 text-black text-2xl mx-auto 
    max-w-md"
    >
      <input
        type="text"
        value={searchQuery || ""}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-1 rounded-md"
        placeholder="search for posts!"
      />
    </form>
  );
}

export default SearchBar;
