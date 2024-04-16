// import { useEffect, useState } from "react";
// import HomePage from "./pages/homePage/HomePage";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header/Header";

const Home = lazy(() => import("./pages/homePage/Home"));
const MoviesDetails = lazy(() =>
import("pages/moviesDetailsPage/MoviesDetails")
);
const NotFoundPage = lazy(() => import("pages/notFoundPage/NotFoundPage"));
const Movies = lazy(() => import("pages/moviesPage/Movies"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MoviesDetails />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
