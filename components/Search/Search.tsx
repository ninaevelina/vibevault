"use client";
import React from "react";
import "./search.scss";

interface SearchProps {
  searchValue: string;
  handleSearch: (query: string) => void;
}

export const Search = ({ searchValue, handleSearch }: SearchProps) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchValue}
        placeholder="Search by title or artist"
        onChange={(e) => handleSearch(e.target.value)}
        className="search-container__searchfield"
      />
    </div>
  );
};
