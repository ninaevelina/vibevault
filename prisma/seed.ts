import { PrismaClient } from "@prisma/client";
import { albums } from "./data/albums";

const prisma = new PrismaClient();

async function main() {
  for (let album of albums) {
    const { reviews, ...albumData } = album;
    const addedAlbum = await prisma.album.create({
      data: albumData,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
