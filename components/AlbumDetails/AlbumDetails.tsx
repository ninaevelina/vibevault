"use client";

import { getAlbumBySlug } from "../../actions/albumActions";
import { AlbumWithReviews } from "../../types/album";
import { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import { BreadcrumbMenu } from "../BreadcrumbMenu/BreadcrumbMenu";
import AlbumImage from "../AlbumImage/AlbumImage";
import ReviewForm from "../ReviewForm/ReviewForm";
import Loader from "../shared/Loader/Loader";

export interface AlbumPageProps {
  params: {
    slug: string;
  };
}

export const AlbumDetails = ({ params: { slug } }: AlbumPageProps) => {
  const [album, setAlbum] = useState<AlbumWithReviews>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);

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
      label: album?.title,
      link: `/albums/${album?.slug}`,
    },
  ];

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getAlbumBySlug(slug);
      setAlbum(data);
      setIsReviewSubmitted(false);
      setIsLoading(false);
    };
    getData();
  }, [isReviewSubmitted, slug]);

  const reviews = album?.reviews;

  const getAverageRating = (): string | undefined => {
    const reviews = album?.reviews;
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
    const reviews = album?.reviews;
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
  };

  return (
    <>
      {album && <BreadcrumbMenu items={breadcrumbItems} />}
      {isLoading ? (
        <Loader />
      ) : (
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
              <div className="album-view__label">{album?.genre}</div>
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
                <span>{reviews?.length + " " + "REVIEWS"}</span>
              </div>
              <div>
                <ReviewForm
                  slug={slug}
                  albumId={album?.id}
                  setIsReviewSubmitted={setIsReviewSubmitted}
                />
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="reviews-container">
        <h4>Reviews</h4>
        <div className="reviews">{renderReviews()}</div>
      </section>
    </>
  );
};
