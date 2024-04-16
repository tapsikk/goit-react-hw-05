import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import { Header } from "./components/Header/Header/Header";
import Navigation from "./components/Navigation/Navigation";

const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Movies = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MoviesDetails = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/notFoundPage/NotFoundPage"));

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Navigation />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;