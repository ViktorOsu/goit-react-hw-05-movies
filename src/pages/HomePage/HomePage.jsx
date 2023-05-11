import { useEffect, useState } from 'react';
import { List, Item, LinkItem } from './HomePageStyled';
import { useLocation } from 'react-router-dom';
import { HomePageApi } from 'serviceApi/HomeApi';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const addMovies = async () => {
      try {
        const data = await HomePageApi();
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
