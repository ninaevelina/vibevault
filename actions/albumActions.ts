import { Album } from "@prisma/client";

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
