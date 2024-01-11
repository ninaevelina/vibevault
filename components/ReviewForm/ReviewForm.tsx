"use client";

import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import "./reviewform.scss";
import { redirect, useRouter } from "next/navigation";
import { Close } from "../Icons/Close";

interface ReviewFormProps {
  albumId?: string;
  slug: string;
  setIsReviewSubmitted: Dispatch<SetStateAction<boolean>>;
}

export default function ReviewForm({
  albumId,
  slug,
  setIsReviewSubmitted,
}: ReviewFormProps) {
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        const createdReview = await response.json();
        console.log(createdReview);
        setIsSubmitted(true);

        setIsReviewSubmitted(true);

        setRating("");
        setContent("");
      } else {
        console.log("Could not create review");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          setIsSubmitted(false);
        }}
        className="button-tertiary"
      >
        ADD REVIEW
      </button>
      <div className={isOpen ? "modal-container-blur" : "modal-container"}>
        {isOpen && (
          <div className="modal-overlay">
            <button
              onClick={() => setIsOpen(false)}
              className="modal-overlay__close-btn"
            >
              <Close />
            </button>
            {!isSubmitted && (
              <form onSubmit={handleSubmit} className="review-form">
                <div className="form-header">
                  <h1>Submit your review</h1>
                </div>
                <label className="rating">
                  <select
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    required={true}
                    className="rating__options"
                  >
                    <option value="" disabled>
                      Rating *
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </label>
                <label className="content">
                  <textarea
                    required
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    className="content__textarea"
                    placeholder="Share your thoughts *"
                  ></textarea>
                </label>
                <div className="button-container">
                  <button type="submit" className="button-container__btn">
                    SUBMIT
                  </button>
                </div>
              </form>
            )}
            {isSubmitted && (
              <div className="button-container">
                <p>Thank you! 🖤</p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    redirect("/");
                  }}
                  className="tertiary-button button-container__btn"
                >
                  Create new review
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
