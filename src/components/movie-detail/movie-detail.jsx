import axios from 'axios';
import { StateContext } from 'components/App';
import { Loader } from 'components/loader/loader';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieDetailNavlinks } from 'components/movie-detail-navlinks/movie-detail-navlinks';
import './movie-detail.css';

const MovieDetail = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const { movieId, setMovieId } = useContext(StateContext);
  const navigate = useNavigate();

  useEffect(() => {
    let idForFetch = movieId;
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${idForFetch}?api_key=b76e2e4e0948108c3961a907afb4d0c6`
        );
        if (idForFetch !== undefined) {
          localStorage.setItem('movieId', idForFetch);
        }
        setMovie(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    if (idForFetch === undefined) {
      const movieIdLocal = localStorage.getItem('movieId');
      if (movieIdLocal !== null) {
        setMovieId(movieIdLocal);
        idForFetch = movieIdLocal;
      } else {
        navigate('/');
        return;
      }
    }
    fetchData();
    /* eslint-disable-next-line */
  }, []);

  let imgSrc, userScore, genres, castPath, reviwPath;

  if (movie !== undefined) {
    imgSrc = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    userScore = Math.round(movie.vote_average * 10);
    genres = movie.genres.map(el => el.name).join(', ');
    castPath = `/movie/${movieId}/cast`;
    reviwPath = `/movie/${movieId}/review`;
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="movie-wraper">
          <button type="button" className="go-back">
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
          <MovieDetailNavlinks
            castPath={castPath}
            reviwPath={reviwPath}
            idForFetch={movieId}
          />
        </div>
      )}
    </div>
  );
};
export default MovieDetail;
