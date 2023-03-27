import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieCastItem } from 'components/movie-cast-item/movie-cast-item';
import './movie-cast.css';

export const MovieCast = ({ ...props }) => {
  const { idForFetch } = props;
  const [cast, setCast] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${idForFetch}/credits?api_key=b76e2e4e0948108c3961a907afb4d0c6`
        );
        console.log(res.data.cast);
        setCast(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    /* eslint-disable-next-line */
  }, []);
  if (cast === undefined) {
    return <></>;
  }
  return (
    <ul className="cast-list">
      {cast.cast.map(el => {
        return (
          <MovieCastItem
            actorName={el.name}
            actorRole={el.character}
            actorPhoto={el.profile_path}
            key={el.cast_id}
          />
        );
      })}
    </ul>
  );
};
