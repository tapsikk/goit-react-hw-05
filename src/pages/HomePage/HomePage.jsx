import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import Heading from "../../components/Heading/Heading";
import Section from "../../components/Section/Section";
import { fetchMoviesTrending } from "/src/components/service/MoviesApi";
import { NavLink } from "react-router-dom";
import MovieList from "/src/components/MovieList/MovieList"

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
        {/* Включаємо компонент MovieList та передаємо йому список фільмів */}
        <MovieList movies={movies} />
      </Container>
    </Section>
  );
};

export default Home;