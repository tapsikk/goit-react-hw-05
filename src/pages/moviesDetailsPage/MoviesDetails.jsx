import { useParams, NavLink } from "react-router-dom";
import {
  fetchMoviesDetails,
  fetchMoviesCredits,
  fetchMoviesReviews,
} from "/src/components/service/MoviesApi";
import { useEffect, useState } from "react";
import MovieCast from "/src/components/MovieCast/MovieCast";
import MovieReviews from "/src/components/MovieReviews/MovieReviews";
import "./MoviesDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showCast, setShowCast] = useState(false); // Состояние видимости для актёров
  const [showReviews, setShowReviews] = useState(false); // Состояние видимости для обзоров

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const { data: movieData } = await fetchMoviesDetails(id);
        const { data: creditsData } = await fetchMoviesCredits(id);
        const { data: reviewsData } = await fetchMoviesReviews(id);
        setMovie(movieData);
        setCredits(creditsData);
        setReviews(reviewsData.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieData();
  }, [id]);

  if (!movie || !credits || !reviews) {
    return <div>Loading...</div>;
  }

  const { title, release_date, vote_average, genres, poster_path } = movie;

  const handleToggleCast = () => {
    setShowCast(!showCast);
    setShowReviews(false); // Закрыть обзоры при открытии актёров
  };

  const handleToggleReviews = () => {
    setShowReviews(!showReviews);
    setShowCast(false); // Закрыть актёров при открытии обзоров
  };

  return (
    <div className="movie-details">
    <div className="movie-total">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        </div>
        <div className="info-movies">
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>Rating: {Math.round(vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
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
      {showReviews && <MovieReviews reviews={reviews} />}
    </div>
  );
};

export default MovieDetails;
