import React from 'react';

const Rating = ({ reviews }) => {
  const calculateAverageRating = () => {
    if (reviews.length === 0) {
      return 0;
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return Math.round(totalRating / reviews.length);
  };

  const calculateAverageRatingPercentage = () => {
    if (reviews.length === 0) {
      return 0;
    }

    const averageRating = calculateAverageRating();
    return (averageRating / 5) * 100;
  };

  return (
    <div>
      <h2>Product Rating</h2>
      <div className="rating-stars">
        {Array(5)
          .fill()
          .map((_, index) => (
            <span
              key={index}
              className={index < calculateAverageRating() ? 'star-filled' : 'star-empty'}
            ></span>
          ))}
      </div>
      <div className="rating-bar">
        <div
          className="rating-fill"
          style={{ width: `${calculateAverageRatingPercentage()}%` }}
        ></div>
      </div>
      <p className="average-rating">Average Rating: {calculateAverageRating()}</p>
    </div>
  );
};

export default Rating;
