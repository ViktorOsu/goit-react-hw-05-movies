import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f13d291a2e62abd75d768079816666c5';

const instance = axios.create({ baseURL: BASE_URL });

export const getTradingMovies = async () => {
  const data = await instance.get(`/trending/all/day?api_key=${API_KEY}`);
  return data.data;
};

export const getSearchMovies = async value => {
  const data = await instance.get(
    `/search/movie?api_key=${API_KEY}&query=${value}&language=en-US&page=1&include_adult=false`
  );
  return data.data;
};

export const getMovieById = async (movieId, info) => {
  const data = await instance.get(
    `/movie/${movieId}${info}?api_key=${API_KEY}`
  );
  return data.data;
};

export const getImages = async () => {
  const data = await instance.get(`/configuration?api_key=${API_KEY}`);
  return data.data;
};
