import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../serviceApi/getMoviesApi';
import { List, Item, LinkItem } from './HomePage/HomePageStyled';
import SearchBox from '../components/SearchBox/SearchBox';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const searchMovie = async () => {
      try {
        const data = await getSearchMovies(query);
        if (data.results.length === 0) {
          alert(`no response on request ${query}`);
          return;
        }
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    searchMovie();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const queryName = e.target.elements.query.value;

    setSearchParams(queryName !== '' ? { query: queryName } : {});
  };

  return (
    <>
      {movies && <SearchBox handleSubmit={handleSubmit} />}
      <List>
        {movies.map(({ title, id }) => (
          <Item key={id}>
            <LinkItem to={`${id}`} state={{ from: location }}>
              {title}
            </LinkItem>
          </Item>
        ))}
      </List>
    </>
  );
};

export default Movies;
