import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MovieItem } from 'components/movie-item/movie-item';
import './search-movie.css';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = ev => {
    ev.preventDefault();
    let queryForSearch = ev.target.movieName.value;
    navigate(`/movies?query=${queryForSearch}`);
    ev.target.reset();
    fetchData(queryForSearch);
  };

  const fetchData = async query => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b76e2e4e0948108c3961a907afb4d0c6&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then(res => {
        setMovieList(res.data.results);
      });
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" name="movieName" className="input-movie-name" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <ul className="movie-list">
        {movieList.map(el => {
          return <MovieItem movie={el} key={el.id} />;
        })}
      </ul>
      ;
    </div>
  );
};

export default Movies;
