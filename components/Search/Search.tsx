"use client";
import React from "react";

interface SearchProps {
  searchValue: string;
  handleSearch: (query: string) => void;
}

export const Search = ({ searchValue, handleSearch }: SearchProps) => {
  return (
    <section className="container-small">
      <div>
        <input
          type="text"
          value={searchValue}
          placeholder="Search albums by title, artist, xxx"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </section>
  );
};
