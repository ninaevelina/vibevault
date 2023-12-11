import prisma from "@/lib/db/prisma";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  try {
    const album = await prisma.album.findUnique({
      where: {
        slug: params.slug,
      },
      include: {
        reviews: true,
      },
    });
    console.log(album);
    return NextResponse.json(album);
  } catch (error) {
    console.log(error, "could not get album");
  }
};
