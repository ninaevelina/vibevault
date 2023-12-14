import AlbumCard from "@/components/AlbumCard/AlbumCard";
import prisma from "@/lib/db/prisma";
import { Album } from "@prisma/client";
import { cache } from "react";
import "./albumpage.scss";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import ReviewForm from "@/components/ReviewForm/ReviewForm";

export interface AlbumPageProps {
  params: {
    slug: string;
  };
}

const getAlbum = cache(async (slug: string) => {
  const album = await prisma.album.findUnique({
    where: { slug },
    include: {
      reviews: true,
    },
  });
  if (!album) console.log("error");
  return album;
});

export default async function AlbumPage({ params: { slug } }: AlbumPageProps) {
  const album = await getAlbum(slug);
  console.log(album, "album by slug");
  return (
    <>
      <section className="album-view">
        <div className="album-view__image">
          {/*<img src={album?.imageUrl} alt={`Photo of ${album?.title}`} />*/}
        </div>
        <ul className="album-view__details">
          <li className="album-view__details--detail">
            <b>Title</b>
            <span>{album?.title}</span>
          </li>
          <li className="album-view__details--detail">
            <b>Artist</b>
            <span>{album?.artist}</span>
          </li>
          <li className="album-view__details--detail">
            <b>Release year</b>
            <span>{album?.year}</span>
          </li>
        </ul>
      </section>
      <section className="grid-container reviews-container">
        <h4>Reviews</h4>
        <div className="reviews">
          {album?.reviews.map((review, i) => {
            return <ReviewCard key={i} review={review} />;
          })}
        </div>
      </section>
      <section className="form-container">
        <h5>Have you got an opinion about the album?</h5>
        <h6>Share them!</h6>
        <ReviewForm slug={slug} albumId={album?.id} />
      </section>
    </>
  );
}
