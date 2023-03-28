import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieCastItem } from 'components/movie-cast-item/movie-cast-item';
import './movie-cast.css';
import { useLocation } from 'react-router-dom';

export const MovieCast = () => {
  const [cast, setCast] = useState({ cast: [] });
  const [error, setError] = useState(false);
  const currentLocation = useLocation();
  /* eslint-disable-next-line */
  const [idForFetch, setIdForFetch] = useState(
    currentLocation.state.idForFetch
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${idForFetch}/credits?api_key=b76e2e4e0948108c3961a907afb4d0c6`
        );
        setCast(res.data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [idForFetch]);

  return (
    <div>
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
      {error === false ? <></> : <h2>Oops, there was an error: {error}</h2>}
    </div>
  );
};
