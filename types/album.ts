import { Album, Review } from "@prisma/client";

export interface AlbumWithReviews extends Album {
  reviews: Review[];
}
