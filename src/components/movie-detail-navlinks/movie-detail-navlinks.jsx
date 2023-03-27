import { MovieCast } from 'components/movie-cast/movie-cast';
import { MovieReview } from 'components/movie-reviews/movie-reviw';
import { NavLink } from 'react-router-dom';

export const MovieDetailNavlinks = ({ ...props }) => {
  const { castPath, reviwPath, idForFetch } = props;

  return (
    <div>
      <h4>Addithinal information</h4>
      <div className="router">
        <NavLink className="cast" to={castPath}>
          Cast
        </NavLink>
        <NavLink className="review" to={reviwPath}>
          Review
        </NavLink>
      </div>
      {window.location.href.includes('cast') ? (
        <MovieCast idForFetch={idForFetch} />
      ) : (
        <></>
      )}
      {window.location.href.includes('review') ? (
        <MovieReview idForFetch={idForFetch} />
      ) : (
        <></>
      )}
    </div>
  );
};
