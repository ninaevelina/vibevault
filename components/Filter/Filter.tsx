"use client";

import React, { useEffect, useState } from "react";
import { Album } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { getAllAlbums } from "@/actions/albumActions";
import AlbumCard from "../AlbumCard/AlbumCard";

interface FilterProps {
  albums: Album[];
  genre: string;
  onGenreChange: (selectedGenre: string) => void;
}

export const Filter = ({ albums, genre, onGenreChange }: FilterProps) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      onGenreChange(query);
    }
  }, [searchParams, onGenreChange]);

  const genres = [
    "All Albums",
    "Dubstep",
    "Pop",
    "Rock",
    "Electronic",
    "d'n'b",
  ];

  return (
    <>
      <section className="container-small">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreChange(genre)}
            className="button-secondary"
          >
            {genre}
          </button>
        ))}
        <div>{genre}</div>
      </section>
    </>
  );
};
