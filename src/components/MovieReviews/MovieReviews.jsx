// import "./MovieReviews.css";

const MovieReviews = ({ reviews }) => {
  return (
    <div className="movie-reviews">
      <h2>Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item">
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieReviews;