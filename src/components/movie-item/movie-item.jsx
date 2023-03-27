import { StateContext } from 'components/App';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const noImg = require('../../img/png-transparent-black-and-white-no-to-camera-logo-video-on-demand-retail-website-simple-no-miscellaneous-television-text.png');

export const MovieItem = ({ ...props }) => {
  const { setMovieId } = useContext(StateContext);
  const { movie } = props;
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const sendMovie = () => {
    setMovieId(movie.id);
    navigate(`/goit-react-hw-05-movies/movie/${movie.id}`, {
      state: currentLocation,
    });
  };
  const imgPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <li className="movie-item" onClick={sendMovie}>
      <img
        src={movie.poster_path !== null ? imgPath : noImg}
        alt=""
        className="movie-item--poster"
      />
      <p className="movie-title">{movie.title}</p>
    </li>
  );
};
