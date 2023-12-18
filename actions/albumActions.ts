import { Album } from "@prisma/client";

const baseUrl = "http://localhost:3000" || "https://vibevault-kappa.vercel.app";

export const getAllAlbums = async (): Promise<Album[]> => {
  const response = await fetch(`${baseUrl}/api/albums`, {
    cache: "reload",
  });
  console.log("albumdata", response.json);

  return response.json();
};
