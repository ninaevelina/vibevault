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
  const [activeGenre, setActiveGenre] = useState<string>("All Albums");

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      onGenreChange(query);
      setActiveGenre(query);
    }
  }, [searchParams, onGenreChange]);

  const genres = [
    "All Albums",
    "Dubstep",
    "Pop",
    "Rock",
    "Electronic",
    "d'n'b",
    "HIPHOP",
    "R&B",
    "Neo soul",
  ];

  return (
    <>
      <section className="container-small">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => {
              onGenreChange(genre);
              setActiveGenre(genre);
            }}
            className={
              activeGenre === genre
                ? "button-secondary active"
                : "button-secondary"
            }
          >
            {genre}
          </button>
        ))}
        <div className="text-container">
          <p>{genre}</p>
        </div>
      </section>
    </>
  );
};
