import { useParams, useLocation, Link, NavLink } from "react-router-dom";
import { fetchMoviesDetails, fetchMoviesCredits, fetchMoviesReviews } from "/src/components/service/MoviesApi";
import { useEffect, useState, useRef } from "react";
import MovieCast from "/src/components/MovieCast/MovieCast";
import MovieReviews from "/src/components/MovieReviews/MovieReviews";
import "./MoviesDetails.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const locationState = useRef(location.state);
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setIsLoading(true);
        const { data: movieData } = await fetchMoviesDetails(movieId);
        const { data: creditsData } = await fetchMoviesCredits(movieId);
        const { data: reviewsData } = await fetchMoviesReviews(movieId);
        setMovie(movieData);
        setCredits(creditsData);
        setReviews(reviewsData.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieData();
  }, [movieId]);



  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie || !credits || !reviews) return null;

  const { title, release_date, vote_average, genres, poster_path, overview } = movie;

  const handleToggleCast = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const handleToggleReviews = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  return (
    <div className="movie-details">
      <div className="movie-total">
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        </div>
        <div className="info-movies">
          <h1>
            {title} ({release_date.slice(0, 4)})
          </h1>
          <p>Rating: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres:</h2>
          <p>{genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <div className="buttons-container">
        <NavLink onClick={handleToggleCast}>
          Cast
        </NavLink>
        <NavLink onClick={handleToggleReviews}>
          Reviews
        </NavLink>
      </div>
      {showCast && <MovieCast cast={credits.cast} />}
      {showReviews && <MovieReviews reviews={reviews} location={locationState.current} />}
    </div>
  );
};

export default MovieDetails;