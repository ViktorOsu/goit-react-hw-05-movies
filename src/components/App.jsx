import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Navigation from './Navigation/Navigation';
import { Container } from './AppStyled';
import MoviesDetails from '../components/MoviesDetails/MoviesDetails';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Movies = lazy(() => import('../pages/Movies'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<h2>loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="movies/:movieId"
            element={
              <Suspense fallback={<h2>loading...</h2>}>
                <MoviesDetails />
              </Suspense>
            }
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
// import { Route, Routes } from 'react-router-dom';
// import HomePage from 'pages/HomePage/HomePage';
// import Movies from 'pages/Movies/Movies';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import HeaderBar from './HeaderBar/HeaderBar';

// export const App = () => {
//   return (
//     <>
//       <HeaderBar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route index element={<HomePage />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:movieId" element={<MovieDetails />}>
//           <Route path="cast" element={<h1>Cast</h1>} />
//           <Route path="reviews" elements={<h1>Reviews</h1>} />
//         </Route>
//       </Routes>
//     </>
//   );
// };

// export default App;
