import axios from 'axios';

const API_KEY = 'f13d291a2e62abd75d768079816666c5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const HomeApi = async () => {
  const data = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return data.data;
};
