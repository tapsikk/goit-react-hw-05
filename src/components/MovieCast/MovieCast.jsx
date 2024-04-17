import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from '/src/components/service/MoviesApi';
// import styles from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const { data } = await fetchMoviesCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching movie cast data:', error);
      }
    };

    fetchCastData();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <div>
        {cast.map((actor) => (
          <div key={actor.id}>
            <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
            <h3>{actor.name}</h3>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCast;
