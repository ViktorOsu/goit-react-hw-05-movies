import { useEffect, useState } from 'react';
import { List, Item, LinkItem } from './HomePageStyled';
import { useLocation } from 'react-router-dom';
import { getTradingMovies } from 'serviceApi/getMoviesApi';
import PropTypes from 'prop-types';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const addMovies = async () => {
      try {
        const data = await getTradingMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    addMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <List>
        {movies.map(({ title, id }) => (
          <Item key={id}>
            <LinkItem to={`movies/${id}`} state={{ from: location }}>
              {title}
            </LinkItem>
          </Item>
        ))}
      </List>
    </>
  );
};

export default HomePage;

HomePage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
