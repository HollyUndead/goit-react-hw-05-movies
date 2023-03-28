import axios from 'axios';

import { Loader } from 'components/loader/loader';
import MoiveDetailNavLinks from 'components/movie-detail-navlinks/movie-detail-navlinks';
import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './movie-detail.css';

const MovieDetail = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const prevLocation = useRef();
  const idForFetch = useRef();

  const goBackButton = () => {
    navigate(prevLocation.current);
  };

  useEffect(() => {
    idForFetch.current = location.pathname
      .slice(location.pathname.indexOf('movie/') + 6)
      .replace('/cast', '')
      .replace('/reviw', '');
    if (location.state !== null) {
      prevLocation.current = location.state.pathname + location.state.search;
    }
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${idForFetch.current}?api_key=b76e2e4e0948108c3961a907afb4d0c6`
        );
        setMovie(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
    /* eslint-disable-next-line */
  }, []);

  let imgSrc, userScore, genres;

  if (movie !== undefined) {
    imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    userScore = Math.round(movie.vote_average * 10);
    genres = movie.genres.map(el => el.name).join(', ');
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="movie-wraper">
          <button type="button" className="go-back" onClick={goBackButton}>
            Go back
          </button>
          <div className="main-info-wrap">
            <img className="movie-poster" src={imgSrc} alt="" />
            <div className="main-info">
              <h2 className="movie-name">{movie.title}</h2>
              <p className="movie-user-score">User score: {userScore}%</p>
              <h3>Overview</h3>
              <p className="overview">{movie.overview}</p>
              <h3>Genres</h3>
              <p className="genres">{genres}</p>
            </div>
          </div>
          <MoiveDetailNavLinks idForFetch={idForFetch.current} />
        </div>
      )}
    </div>
  );
};
export default MovieDetail;
