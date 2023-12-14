import prisma from "@/lib/db/prisma";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const reviews = await prisma.review.findMany();
  console.log(reviews);
  return NextResponse.json(reviews);
}
