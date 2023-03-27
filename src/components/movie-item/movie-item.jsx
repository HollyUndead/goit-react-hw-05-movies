import { StateContext } from 'components/App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const MovieItem = ({ ...props }) => {
  const { setMovieId } = useContext(StateContext);
  const { movie } = props;
  const sendMovie = () => {
    setMovieId(movie.id);
  };
  const path = `/movie/${movie.id}`;
  const imgPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <li className="movie-item">
      <Link to={path} onClick={sendMovie}>
        <img src={imgPath} alt="" className="movie-item--poster" />
        <p className="movie-title">{movie.title}</p>
      </Link>
    </li>
  );
};
