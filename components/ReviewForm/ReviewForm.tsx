"use client";

import { FormEvent, useState } from "react";
import "./reviewform.scss";
import { useRouter } from "next/navigation";

interface ReviewFormProps {
  albumId?: string;
  slug: string;
}

export default function ReviewForm({ albumId, slug }: ReviewFormProps) {
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/albums/${slug}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          albumId,
          review: {
            content: content,
            rating: rating,
          },
        }),
      });

      if (response.ok) {
        console.log("Review created");
        const createdReview = await response.json();
        console.log(createdReview);

        setRating("");
        setContent("");
        router.refresh();
      } else {
        console.log("Could not create review");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="review-form">
      <label className="rating">
        <span className="rating__label-description">Rating</span>
        <select
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          className="rating__options"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      <label className="content">
        <span className="content__label-description">Share your thoughts</span>
        <textarea
          required
          onChange={(e) => setContent(e.target.value)}
          value={content}
          className="content__textarea"
        ></textarea>
      </label>
      <div className="button-container">
        <button type="submit" className="button-container__btn">
          Add Review
        </button>
      </div>
    </form>
  );
}
