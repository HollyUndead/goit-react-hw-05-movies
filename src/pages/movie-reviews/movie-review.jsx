import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieReviewItem } from 'components/movie-reviews-item/movie-reviews-item';
import { useLocation } from 'react-router-dom';

export const MovieReview = () => {
  const [review, setReview] = useState({ results: [] });
  const [error, setError] = useState(false);
  const currentLocation = useLocation();
  /* eslint-disable-next-line */
  const [idForFetch, setIdForFetch] = useState(
    currentLocation.state.idForFetch
  );

  useEffect(() => {
    console.log(idForFetch);
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${idForFetch}/reviews?api_key=b76e2e4e0948108c3961a907afb4d0c6`
        );
        setReview(res.data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, [idForFetch]);

  return (
    <div>
      <ul className="review-list">
        {review.results.map(el => {
          return <MovieReviewItem movieReview={el} key={el.id} />;
        })}
      </ul>
      {error === false ? <></> : <h2>Oops, there was an error: {error}</h2>}
    </div>
  );
};
