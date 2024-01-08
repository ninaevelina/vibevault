import prisma from "@/lib/db/prisma";

import { cache } from "react";
import "./albumpage.scss";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import ReviewForm from "@/components/ReviewForm/ReviewForm";
import { getAlbumBySlug } from "@/actions/albumActions";
import AlbumImage from "@/components/AlbumImage/AlbumImage";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Accordion from "@/components/Accordion/Accordion";
import { BreadcrumbMenu } from "@/components/BreadcrumbMenu/BreadcrumbMenu";
import { AlbumDetails } from "@/components/AlbumDetails/AlbumDetails";

export interface AlbumPageProps {
  params: {
    slug: string;
  };
}

export default async function AlbumPage({ params: { slug } }: AlbumPageProps) {
  /* const album = await getAlbumBySlug(slug);
  console.log(album, "album by slug");
  const reviews = album.reviews;
  console.log("reviews", reviews);
  const breadcrumbItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Albums",
      link: "/albums",
    },
    {
      label: album.title,
      link: `/albums/${album.slug}`,
    },
  ];

  const getAverageRating = (): string | undefined => {
    const reviews = album.reviews;
    if (reviews && reviews?.length > 0) {
      const ratings = reviews?.map((review) => review.rating);
      const formattedRatings = ratings?.map((rating) => Number(rating));
      const sumRatings = formattedRatings?.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue;
        },
        0
      );
      const averageRating = sumRatings / formattedRatings?.length;
      const roundedAverageRating = averageRating.toFixed(1);

      return roundedAverageRating;
    }
    return undefined;
  };

  const renderReviews = () => {
    const reviews = album.reviews;
    if (reviews && reviews.length > 0) {
      return (
        <>
          {album?.reviews.map((review, i) => {
            return <ReviewCard key={i} review={review} />;
          })}
        </>
      );
    } else {
      return (
        <div className="text-container">
          <p>No reviews yet</p>
        </div>
      );
    }
  };*/

  return (
    /*
    <>
      {album && <BreadcrumbMenu items={breadcrumbItems} />}
      <section className="album-view">
        <div className="album-view__image">
          {album && <AlbumImage album={album} />}
        </div>
     
        <div className="container-large">
          <div className="small-container">
            <div>
              <h1>{album?.title}</h1>
              <h2>{album?.artist}</h2>
            </div>
            <div>{album.genre}</div>
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
            <li className="album-view__details--detail">
              <b>Rating</b>
              <span>{getAverageRating()}</span>{" "}
            </li>
          </ul>
          <div className="small-container">
            <div>
              <span>{reviews.length + " " + "reviews"}</span>
            </div>
            <div>
              <ReviewForm slug={slug} albumId={album?.id} />
            </div>
          </div>
        </div>
      </section>
      <section className="reviews-container">
        <h4>Reviews</h4>
        <div className="reviews">{renderReviews()}</div>
      </section>
    </>*/
    <AlbumDetails params={{ slug }} />
  );
}
