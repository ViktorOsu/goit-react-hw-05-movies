import axios from 'axios';

const API_KEY = 'f13d291a2e62abd75d768079816666c5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const MovieSearchApi = async value => {
  const data = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${value}`
  );
  return data.data;
};

const getMovieDetails = async (movieId, info) => {
  const data = await axios.get(`/movie/${movieId}${info}?api_key=${API_KEY}`);
  return data.data;
};

const getImages = async () => {
  const data = await axios.get(`/configuration?api_key=${API_KEY}`);
  return data.data;
};
export { MovieSearchApi, getMovieDetails, getImages };
