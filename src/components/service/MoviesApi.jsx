import axios from 'axios';

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2NhOWQwMDU5NjQ4M2I3ZWUzMWYxOWIxYWU3Yzk4MCIsInN1YiI6IjY2MWFiODk2NWZmMzRlMDE3YzU5OWVjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.13HypBN1EO0ZE8bzent3k5J9Dl6d96ofuX2p1koiEhQ';

const BASE_URL = 'https://api.themoviedb.org/';

const options = {
  headers: {
    Authorization: 'Bearer ' + API_TOKEN,
  },
};

export const fetchMoviesTrending = async () => {
  const url = BASE_URL + '3/trending/movie/day';
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesSearch = async query => {
  const url =
    BASE_URL +
    `3/search/movie?query=${query}`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesDetails = async movieId => {
  const url = BASE_URL + `3/movie/${movieId}`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesCredits = async movieId => {
  const url = BASE_URL + `3/movie/${movieId}/credits`;
  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesReviews = async movieId => {
  const url = BASE_URL + `3/movie/${movieId}/reviews`;
  const response = await axios.get(url, options);
  return response;
};