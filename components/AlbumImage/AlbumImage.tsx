import { Album } from "@prisma/client";
import Image from "next/image";

interface AlbumImageProps {
  album: Album;
}

export default function AlbumImage({ album }: AlbumImageProps) {
  return (
    <Image
      src={album.imageUrl}
      height={400}
      width={400}
      alt={`Image of ${album.title}`}
      priority={true}
    />
  );
}
