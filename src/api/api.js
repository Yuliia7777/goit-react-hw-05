import axios from "axios";

const bearer_token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmMwZGQ0ZjU3NmI4YjQxYWM3YzM1MWFhZWY1ZjkyYiIsInN1YiI6IjY2NjViZmE3NmM5NTZjNjk1ZTEzODY5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yKaFIB3Ro1Ktg08UIuQr05kZLDjJFYMYp-W6mzVRjLo";
const api_key = "cfc0dd4f576b8b41ac7c351aaef5f92b";
const BASE_URL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: bearer_token,
  },
});

export const fetchTrendingMovies = async () => {
  const response = await instance.get("/trending/movie/day");
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await instance.get("/search/movie", {
    params: {
      query,
      page: 1,
      language: "en-US",
      include_adult: true,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}/credits`);
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await instance.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};
