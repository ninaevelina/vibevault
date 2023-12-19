import { Album } from "@prisma/client";
import Link from "next/link";
import "./albumcard.scss";
import Image from "next/image";

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <article className="album">
      <div className="album__image">
        <Image
          src={album.imageUrl}
          height={600}
          width={600}
          alt={`Image of ${album.title}`}
          style={{ width: "100%", maxWidth: "100%", height: "100%" }}
        />
      </div>
      <div className="album__details">
        <h2 className="album__details--title">{album.title}</h2>
        <h3>{album.artist}</h3>
        <label className="album__details--label">{album.genre}</label>
        <Link href={"/albums/" + album.slug} className="album__details--link">
          View Album
        </Link>
      </div>
    </article>
  );
}
