import { ReviewLS } from "@/types/reviewLS";

export const saveToLS = (reviewsLS: ReviewLS[]) => {
  localStorage.setItem("likedReviews", JSON.stringify(reviewsLS) || "[]");
};

export const getLSReviews = (): ReviewLS[] => {
  const storedData = JSON.parse(localStorage.getItem("likedReviews") || "[]");
  console.log("storedData", storedData);
  return storedData;
};
