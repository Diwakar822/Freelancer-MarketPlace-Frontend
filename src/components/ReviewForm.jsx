import React, { useState } from "react";
import axios from "axios";

const ReviewForm = ({freelancerId,onReviewSubmit }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // const token = localStorage.getItem("token");
      // if (!token) {
      //   throw new Error("User is not authenticated. Please log in.");
      // }

      const response = await axios.post("https://freelancer-marketplace-backend-1.onrender.com/api/reviews/reviews",{freelancerId,rating,comment});
      
      
      
      if (response.data.success) {
        alert("Review submitted successfully!");
        onReviewSubmit(response.data.review); // Callback to update parent component
      }
    } catch (error) {
      setError(error.response?.data?.message || "Failed to submit review. Please try again.");
    }
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Leave a Review</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>

        <div className="mb-4">
          <label className="block text-gray-700">Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full p-2 border rounded"
            required
          >
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;