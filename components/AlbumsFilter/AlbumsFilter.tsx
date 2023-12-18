"use client";

import React, { useEffect, useState } from "react";
import { Album } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { getAllAlbums } from "@/actions/albumActions";
import AlbumCard from "../AlbumCard/AlbumCard";

export const AlbumsFilter = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [genre, setGenre] = useState<string>("All Albums");

  useEffect(() => {
    const getAlbumData = async () => {
      const albums = await getAllAlbums();
      setAlbums(albums);
    };
    getAlbumData();
  }, []);

  const filteredAlbums =
    genre === "All Albums"
      ? albums
      : albums.filter((album) => album.genre === genre);

  const searchParams = useSearchParams();

  const handleClick = (genre: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("query", genre);
    setGenre(genre);
    if (genre === "All Albums") {
      setAlbums(albums);
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
            onClick={() => handleClick(genre)}
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
