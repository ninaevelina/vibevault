"use client";

import { Review } from "@prisma/client";
import "./reviewcard.scss";
import { Star } from "../Icons/Star";
import { getLSReviews, saveToLS } from "@/actions/localStorage";
import { useState } from "react";
import { ReviewLS } from "@/types/reviewLS";
import Heart from "../Icons/Heart";
import HeartFilled from "../Icons/HeartFilled";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const [reviewsLS, setReviewsLS] = useState<ReviewLS[]>(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      return getLSReviews();
    }
    return [];
  });

  const handleClick = () => {
    const isReviewLiked = reviewsLS.some(
      (likedReview) => likedReview.id === review.id
    );

    if (isReviewLiked) {
      const newLSReviews = reviewsLS.filter((item) => item.id !== review.id);
      saveToLS(newLSReviews);
      setReviewsLS(newLSReviews);
    } else {
      const reviewWithLikes: ReviewLS = {
        id: review.id,
        rating: review.rating,
        content: review.content,
        isLiked: true,
        albumId: review.albumId,
        createdAt: review.createdAt,
      };
      const newLSReviews = [...reviewsLS, reviewWithLikes];
      saveToLS(newLSReviews);
      setReviewsLS(newLSReviews);
    }

    const lsReviews = getLSReviews();
  };

  const isReviewLiked = reviewsLS.some(
    (likedReview) => likedReview.id === review.id
  );

  const renderRating = (rating: string) => {
    const formattedRating = parseInt(rating, 10);
    const stars = [];

    if (!isNaN(formattedRating) && formattedRating > 0) {
      for (let i = 0; i < formattedRating; i++) {
        stars.push(
          <span key={i}>
            <Star />
          </span>
        );
      }
    }

    return stars;
  };
  return (
    <article className="review">
      <div className="review__rating">{renderRating(review.rating)}</div>
      <div className="review__content">{review.content}</div>
      <div className="review__like small-container" onClick={handleClick}>
        {isReviewLiked ? (
          <div className="review__like--items-wrapper">
            {" "}
            <span>Liked</span>
            <HeartFilled />
          </div>
        ) : (
          <div className="review__like--items-wrapper">
            <span>Find this review helpful? Give it a like</span>
            <Heart />
          </div>
        )}
      </div>
    </article>
  );
}
