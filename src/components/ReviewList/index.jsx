import React from 'react';
import "../../styles/review.css"

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul className="review-list">
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              <div className="review-info">
                <p className="review-username">{review.username}</p>
                <p className="review-rating">Overall Rating: {review.rating}</p>
              </div>
              <div className="review-comment">
                <p>{review.comment}</p>
              </div>
              <div className="review-ratings">
                <p className="review-rating">Comfort: {review.comfort}</p>
                <p className="review-rating">Fit: {review.fit}</p>
                <p className="review-rating">Quality: {review.quality}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
