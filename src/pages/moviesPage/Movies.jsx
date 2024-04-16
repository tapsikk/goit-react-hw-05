import { useEffect, useState } from "react";
import { useSearchParams, NavLink } from "react-router-dom"; // Добавляем NavLink
import { fetchMoviesSearch } from "/src/components/service/MoviesApi";
import { SearchBox } from "/src/components/SearchBox/SearchBox";

export default function Products() {
  const [movies, setMovies] = useState([]); // Хранение списка фильмов
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
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {/* Добавляем NavLink вокруг названия фильма */}
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
}
