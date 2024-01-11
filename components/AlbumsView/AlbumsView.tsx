"use client";

import { getAllAlbums } from "../../actions/albumActions";
import { Album } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { Search } from "../Search/Search";
import { Filter } from "../Filter/Filter";
import { useSearchParams } from "next/navigation";
import AlbumCard from "../AlbumCard/AlbumCard";
import { Loader } from "../shared/Loader/Loader";
import { BreadcrumbMenu } from "../BreadcrumbMenu/BreadcrumbMenu";

export const AlbumsView = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [genre, setGenre] = useState<string>("All Albums");
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const breadcrumbItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Albums",
      link: "/albums",
    },
  ];

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const albumData = await getAllAlbums();
      setAlbums(albumData);
      setIsLoading(false);
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
      <section className="small-container">
        <BreadcrumbMenu items={breadcrumbItems} />
        <Search searchValue={searchValue} handleSearch={handleSearch} />
      </section>
      <section className="flex-center">
        <h1>{genre.toUpperCase()}</h1>
        <Filter
          albums={albums}
          genre={genre}
          onGenreChange={handleGenreChoice}
        />
      </section>
      <section className="grid-container">
        {isLoading ? (
          <Loader />
        ) : (
          albums
            .filter(
              (album) =>
                album.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                album.artist.toLowerCase().includes(searchValue.toLowerCase())
            )
            .filter((album) => genre === "All Albums" || album.genre === genre)
            .map((album) => <AlbumCard album={album} key={album.albumId} />)
        )}
      </section>
    </>
  );
};

export default AlbumsView;
