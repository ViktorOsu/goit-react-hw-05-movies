import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f13d291a2e62abd75d768079816666c5';

const instance = axios.create({ baseURL: BASE_URL });

export const getTradingMovies = () => {
  return instance.get(`/trending/all/day?api_key=${API_KEY}`);
};

export const getSearchMovies = name => {
  return instance.get(
    `/search/movie?api_key=${API_KEY}&query=${name}&language=en-US&page=1&include_adult=false`
  );
};

export const getMovieById = id => {
  return instance.get(`/movie/${id}?api_key=${API_KEY}`);
};

export const getMovieCast = id => {
  return instance.get(`/movie/${id}/credits?api_key=${API_KEY}`);
};

export const getMovieReviews = id => {
  return instance.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
};
