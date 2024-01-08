import { Album } from "@prisma/client";
import { cache } from "react";
import { AlbumWithReviews } from "@/types/album";
import { useBaseUrl } from "@/hooks/useBaseURL";

/*const baseUrl =
  "http://localhost:3000/api" ||
  "https://vibevault-kappa.vercel.app/api" ||
  "https://vibevault-git-vv-35-album-page-a-3b0b7c-ninas-projects-53ad124c.vercel.app/api";*/

export const getAllAlbums = async (): Promise<Album[]> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const baseURL = useBaseUrl();

  const response = await fetch(`${baseURL}/api/albums`, {
    //cache: "reload",
  });
  console.log("albumdata", response.json);

  const results = await response.json();
  return results;
};

export const getAlbumBySlug = cache(
  async (slug: string): Promise<AlbumWithReviews> => {
    const baseURL = useBaseUrl();
    const response = await fetch(`${baseURL}api/albums/${slug}`);
    const data = (await response.json()) as AlbumWithReviews;
    console.log(data);
    return data;
  }
);
