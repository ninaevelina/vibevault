import React from "react";
import prisma from "@/lib/db/prisma";
import AlbumCard from "@/components/AlbumCard/AlbumCard";

export default async function Albums() {
  const albums = await prisma.album.findMany();
  console.log(albums);

  return (
    <section>
      {albums.map((album) => (
        /* <article key={album.albumId}>
          <h2>{album.title}</h2>
        </article>*/
        <AlbumCard album={album} key={album.id} />
      ))}
    </section>
  );
}
