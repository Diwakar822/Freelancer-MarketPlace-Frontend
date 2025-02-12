import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

const FreelancerProfile = () => {
  const { freelancerId } = useParams(); // Get freelancerId from URL
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (newReview) => {
    setReviews([...reviews, newReview]); // Update the reviews list
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Freelancer Profile</h1>
      <ReviewForm freelancerId={freelancerId} onReviewSubmit={handleReviewSubmit} />
      <ReviewList freelancerId={freelancerId} />
    </div>
  );
};

export default FreelancerProfile;