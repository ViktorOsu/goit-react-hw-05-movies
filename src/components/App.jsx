import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import HeaderBar from './HeaderBar/HeaderBar';

export const App = () => {
  return (
    <>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<h1>Cast</h1>} />
          <Route path="reviews" elements={<h1>Reviews</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
