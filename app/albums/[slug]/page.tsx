import "./albumpage.scss";

import { AlbumDetails } from "@/components/AlbumDetails/AlbumDetails";

export interface AlbumPageProps {
  params: {
    slug: string;
  };
}

export default async function AlbumPage({ params: { slug } }: AlbumPageProps) {
  return <AlbumDetails params={{ slug }} />;
}
