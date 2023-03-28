import { useEffect, useState } from 'react';
import axios from 'axios';
import { MovieItem } from 'components/movie-item/movie-item';
import { Loader } from 'components/loader/loader';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=b76e2e4e0948108c3961a907afb4d0c6'
      )
      .then(res => {
        setTrandingMovies(res.data.results);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <ul className="movie-list">
      {loading ? (
        <Loader />
      ) : (
        trandingMovies.map(el => {
          return <MovieItem movie={el} key={el.id} />;
        })
      )}
      {error === false ? <></> : <h2>Oops, there was an error</h2>}
    </ul>
  );
};

export default Home;
