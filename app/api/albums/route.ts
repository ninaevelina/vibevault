import prisma from "@/lib/db/prisma";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const albums = await prisma.album.findMany();

  return NextResponse.json(albums);
}
