import { Review } from "@prisma/client";

export interface ReviewLS extends Review {
  isLiked: boolean;
}
