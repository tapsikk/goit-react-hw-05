import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import Heading from "../../components/Heading/Heading";
import Section from "../../components/Section/Section";
import { fetchMoviesTrending } from "/src/components/service/MoviesApi";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const { data } = await fetchMoviesTrending();
        setMovies(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Trending Movies" bottom />
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>
                  {movie.title}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Section>
  );
};

export default Home;
