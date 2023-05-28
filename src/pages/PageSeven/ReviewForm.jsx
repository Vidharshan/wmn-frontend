import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic, if required

    const newReview = {
      rating,
      comment,
    };

    addReview(newReview);

    // Clear form fields
    setRating(0);
    setComment('');
  };

  return (
    <div>
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Rating:</label>
          <input
            type="number"
            min="0"
            max="5"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
