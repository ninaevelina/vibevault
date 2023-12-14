import { Review } from "@prisma/client";
import "./reviewcard.scss";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="review">
      <div className="review__rating">{review.rating} ⭐️</div>
      <div className="review__content">{review.content}</div>
    </article>
  );
}
