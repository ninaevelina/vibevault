import { Album } from "@prisma/client";

const baseUrl =
  "http://localhost:3000" ||
  "https://vibevault-kappa.vercel.app" ||
  "https://vibevault-git-vv-35-album-page-a-3b0b7c-ninas-projects-53ad124c.vercel.app";

export const getAllAlbums = async (): Promise<Album[]> => {
  const response = await fetch(`${baseUrl}/api/albums`, {
    //cache: "reload",
  });
  console.log("albumdata", response.json);

  const results = await response.json();
  return results;
};
