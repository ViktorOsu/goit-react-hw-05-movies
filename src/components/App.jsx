import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './Navigation/Navigation';
import { Container } from './AppStyled';

const MoviesDetails = lazy(() =>
  import('../pages/MoviesDetails/MoviesDetails')
);
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
