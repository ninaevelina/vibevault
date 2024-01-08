import { Album } from "@prisma/client";
import { cache } from "react";
import { AlbumWithReviews } from "@/types/album";
import { useBaseUrl } from "@/hooks/useBaseURL";

export const getAllAlbums = async (): Promise<Album[]> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const baseURL = useBaseUrl();

  const response = await fetch(`${baseURL}/api/albums`, {
    //cache: "reload",
  });
  console.log("albumdata", response.json);

  const results = await response.json();
  console.log(results);
  return results;
};

export const getAlbumBySlug = cache(
  async (slug: string): Promise<AlbumWithReviews> => {
    const baseURL = useBaseUrl();
    const response = await fetch(`${baseURL}/api/albums/${slug}`);
    const data = (await response.json()) as AlbumWithReviews;
    console.log(data);
    return data;
  }
);
