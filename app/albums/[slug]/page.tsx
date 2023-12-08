import AlbumCard from "@/components/AlbumCard/AlbumCard";
import prisma from "@/lib/db/prisma";
import { Album } from "@prisma/client";
import { cache } from "react";

export interface AlbumPageProps {
  params: {
    slug: string;
  };
}

const getAlbum = cache(async (slug: string) => {
  const album = await prisma.album.findUnique({
    where: { slug },
  });
  if (!album) console.log("error");
  return album;
});

export default async function AlbumPage({ params: { slug } }: AlbumPageProps) {
  const album = await getAlbum(slug);
  console.log(album, "album by slug");
  return <div>{/*<img src={album?.imageUrl} />*/}</div>;
}
