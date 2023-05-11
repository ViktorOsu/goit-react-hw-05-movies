import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../serviceApi/getMoviesApi';
import { CastList, CastImg } from './CastStyled';
import { getImages } from '../../serviceApi/getMoviesApi';


export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const getActors = async () => {
      try {
        const data = await getMovieById(movieId, '/credits');
        setActors(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    const images = async () => {
      try {
        const dataImg = await getImages();
        setImageData(dataImg.images);
      } catch (error) {
        console.log(error.message);
      }
    };
    images();
    getActors();
  }, [movieId]);

  if (!actors) {
    return null;
  }
  if (!imageData) {
    return null;
  }

  const { cast } = actors;
  const { base_url } = imageData;

  return (
    <CastList>
      {cast.map(({ character, original_name, profile_path, id }) => (
        <div key={id}>
          <CastImg
            src={`${base_url}/original${profile_path}`}
            alt={original_name}
          />
          <p>{character}</p>
          <p>{original_name}</p>
        </div>
      ))}
    </CastList>
  );
};

export default Cast;
