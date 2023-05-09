import { useEffect, useState } from 'react';
import { getTradingMovies } from 'serviceApi/getMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTradingMovies().then(res => setMovies(res.data.results));
  }, []);

  console.log(movies);
  return <h1>Movie List</h1>;
};

export default Movies;
