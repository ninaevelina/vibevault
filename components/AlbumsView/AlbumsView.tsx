"use client";

import { getAllAlbums } from "@/actions/albumActions";
import { Album } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";
import { useSearchParams } from "next/navigation";
import AlbumCard from "../AlbumCard/AlbumCard";

export const AlbumsView = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [genre, setGenre] = useState<string>("All Albums");
  const [searchValue, setSearchValue] = useState<string>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      const albumData = await getAllAlbums();
      setAlbums(albumData);
    };
    getData();
  }, []);

  const handleGenreChoice = (selectedGenre: string) => {
    setGenre(selectedGenre);
  };

  const handleSearch = async (query: string) => {
    setSearchValue(query);
    if (query === "") {
      const albumData = await getAllAlbums();
      setAlbums(albumData);
    }
  };

  return (
    <>
      <Search searchValue={searchValue} handleSearch={handleSearch} />
      <Filter albums={albums} genre={genre} onGenreChange={handleGenreChoice} />
      <section className="grid-container">
        {albums
          .filter(
            (album) =>
              album.title.toLowerCase().includes(searchValue.toLowerCase()) ||
              album.artist.toLowerCase().includes(searchValue.toLowerCase())
          )
          .filter((album) => genre === "All Albums" || album.genre === genre)
          .map((album) => (
            <AlbumCard album={album} key={album.albumId} />
          ))}
      </section>
    </>
  );
};

export default AlbumsView;
