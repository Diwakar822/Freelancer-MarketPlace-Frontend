import React, { useEffect, useState } from "react";
import axios from "axios";

const ReviewList = ({ freelancerId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://freelancer-marketplace-backend-1.onrender.com/api/reviews/reviews/${freelancerId}`
        );
        setReviews(response.data.reviews);
      } catch (error) {
        setError("Failed to fetch reviews. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [freelancerId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review._id} className="bg-white p-4 shadow-md rounded-lg mb-4">
         
            <p className="text-gray-600">{review.comment}</p>
            <p className="text-yellow-500">Rating: {review.rating} Stars</p>
            <p className="text-sm text-gray-500">
              By: {review.clientId} on {new Date(review.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

export default ReviewList;