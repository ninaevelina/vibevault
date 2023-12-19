/*"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Album } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { getAllAlbums } from "@/actions/albumActions";
import AlbumCard from "../AlbumCard/AlbumCard";

interface SearchFormProps {
  setAlbums: Dispatch<SetStateAction<Album[]>>;
}

export const SearchForm = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const getAlbumData = async () => {
      const albums = await getAllAlbums();
      setAlbums(albums);
    };
    getAlbumData();
  }, []);

  const queriedAlbums = albums.filter(
    (album) =>
      album.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      album.artist.toLowerCase().includes(searchValue.toLowerCase())
  );

  const searchParams = useSearchParams();
  console.log(searchParams);

  const handleSearch = async (query: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("query", query);
    setSearchValue(query);

    if (!query || query.length === 0) {
      params.delete("query");
      const allAlbums = await getAllAlbums();
      setAlbums(allAlbums);
    } else {
      const queriedAlbums = albums.filter(
        (album) =>
          album.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          album.artist.toLowerCase().includes(searchValue.toLowerCase())
      );
      setAlbums(queriedAlbums);
    }
  };

  return (
    <>
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

      <section className="grid-container">
        {albums.map((album) => (
          <AlbumCard album={album} key={album.albumId} />
        ))}
      </section>
    </>
  );
};
*/
