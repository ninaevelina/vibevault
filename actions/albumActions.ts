import { Album } from "@prisma/client";
import { cache } from "react";
import { AlbumWithReviews } from "@/types/album";

const baseUrl =
  "http://localhost:3000/api" ||
  "https://vibevault-kappa.vercel.app/api" ||
  "https://vibevault-git-vv-35-album-page-a-3b0b7c-ninas-projects-53ad124c.vercel.app/api";

export const getAllAlbums = async (): Promise<Album[]> => {
  const response = await fetch(`${baseUrl}/albums`, {
    //cache: "reload",
  });
  console.log("albumdata", response.json);

  const results = await response.json();
  return results;
};

export const getAlbumBySlug = cache(
  async (slug: string): Promise<AlbumWithReviews> => {
    const response = await fetch(`${baseUrl}/albums/${slug}`);
    const album = (await response.json()) as AlbumWithReviews;
    console.log(album);
    return album;
  }
);
