import React from "react";
import { ReviewData } from "./ReviewData";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  console.log(`${ReviewData[0].img}`);
  return <ReviewItem />;
};

export default Reviews;
