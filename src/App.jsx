// import { useEffect, useState } from "react";
// import HomePage from "./pages/homePage/HomePage";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header/Header";


const Home = lazy(() => import("./pages/homePage/Home"));
const MoviesPage = lazy(() => import("pages/moviesPage/Movies"));
const NotFoundPage = lazy(() => import("pages/notFound/NotFound"));
// const MoviesPageDetails = lazy(() => import("pages/Home"));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        {/* <Route path="/movies/:id" element={<MoviesPageDetails />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </Suspense>
    </>
  );
};

export default App;