import React, { useEffect, useMemo, useState } from "react";
import prisma from "@/lib/db/prisma";
import AlbumCard from "@/components/AlbumCard/AlbumCard";
import { Album } from "@prisma/client";
import { getAllAlbums } from "@/actions/albumActions";
import { AlbumsFilter } from "@/components/AlbumsFilter/AlbumsFilter";

export default async function Albums() {
  const albums = await getAllAlbums();

  return (
    <>
      <AlbumsFilter />
      <section className="grid-container">
        {albums.map((album) => (
          <AlbumCard album={album} key={album.id} />
        ))}
      </section>
    </>
  );
}
