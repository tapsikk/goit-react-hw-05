import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import { Header } from "./components/Header/Header/Header";
import Navigation from "./components/Navigation/Navigation";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Movies = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/notFoundPage/NotFoundPage"));
const MovieCastPage = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviewsPage = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCastPage />} /> {/* Оновлений шлях до MovieCastPage */}
            <Route path="reviews" element={<MovieReviewsPage />} /> {/* Оновлений шлях до MovieReviewsPage */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
