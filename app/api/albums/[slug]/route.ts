import prisma from "@/lib/db/prisma";
import { NextResponse, NextRequest } from "next/server";

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

export const POST = async (
  req: Request,
  { params }: { params: { slug: string } }
) => {
  try {
    const { albumId, review } = await req.json();

    const album = await prisma.album.findUnique({
      where: {
        slug: params.slug,
      },
      include: {
        reviews: true,
      },
    });

    if (!album) {
      return NextResponse.error();
    }

    const newReview = await prisma.review.create({
      data: {
        ...review,
        album: {
          connect: { id: albumId },
        },
      },
    });
    console.log(newReview);
    return NextResponse.json(newReview);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
