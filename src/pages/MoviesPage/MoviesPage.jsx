import { useEffect, useState } from "react";
import { useSearchParams, NavLink } from "react-router-dom";
import { fetchMoviesSearch } from "/src/components/service/MoviesApi";
import { SearchBox } from "/src/components/SearchBox/SearchBox";
import MovieList from "/src/components/MovieList/MovieList.jsx";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("name") ?? "";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await fetchMoviesSearch(movieName);
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [movieName]);

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={movieName} onChange={updateQueryString} />
      <MovieList movies={movies} />
    </main>
  );
};

export default MoviesPage;