import { Album } from "@prisma/client";
import Link from "next/link";

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <article>
      <h2>{album.title}</h2>
      <h3>{album.artist}</h3>
      <label>{album.genre}</label>
      <Link href={"/albums/" + album.slug}>View Album</Link>
    </article>
  );
}
