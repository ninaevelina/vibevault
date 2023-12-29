import { Review } from "@prisma/client";
import "./reviewcard.scss";
import { Star } from "../Icons/Star";

interface ReviewCardProps {
  review: Review;
}

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

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="review">
      <div className="review__rating">{renderRating(review.rating)}</div>
      <div className="review__content">{review.content}</div>
    </article>
  );
}
