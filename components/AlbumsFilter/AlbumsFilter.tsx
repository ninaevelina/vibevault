"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Album } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { getAllAlbums } from "@/actions/albumActions";
import AlbumCard from "../AlbumCard/AlbumCard";

export const AlbumsFilter = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [genre, setGenre] = useState("All Albums");

  useEffect(() => {
    const getAlbumData = async () => {
      const albums = await getAllAlbums();
      setAlbums(albums);
    };
    getAlbumData();
  }, []);

  let filteredAlbums = albums.filter((album) => album.genre === genre);
  if (genre === "All Albums") {
    filteredAlbums = albums;
  }

  const searchParams = useSearchParams();

  const handleClick = (genre: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (genre) {
      params.set("query", genre);
      setGenre(genre);
      if (genre === "All Albums") {
        setAlbums(albums);
      }
    } else {
      params.delete("query");
    }
  };

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
            onClick={(e) => handleClick(genre)}
            className="button-secondary"
          >
            {genre}
          </button>
        ))}
        <div>{genre}</div>
      </section>

      <section className="grid-container test">
        {filteredAlbums.map((album) => (
          <AlbumCard album={album} key={album.albumId} />
        ))}
      </section>
    </>
  );
};
