import React from "react";
import prisma from "@/lib/db/prisma";
import AlbumCard from "@/components/AlbumCard/AlbumCard";

export default async function Albums() {
  const albums = await prisma.album.findMany();
  console.log(albums);

  return (
    <section className="grid-container">
      {albums.map((album) => (
        <AlbumCard album={album} key={album.id} />
      ))}
    </section>
  );
}
