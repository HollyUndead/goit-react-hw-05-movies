import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieReviewItem } from 'components/movie-reviews-item/movie-reviews-item';

export const MovieReview = ({ ...props }) => {
  const { idForFetch } = props;
  const [review, setReview] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${idForFetch}/reviews?api_key=b76e2e4e0948108c3961a907afb4d0c6`
        );
        setReview(res.data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
    /* eslint-disable-next-line */
  }, []);

  if (review === undefined) {
    return <></>;
  }
  return (
    <p>
      <ul className="review-list">
        {review.results.map(el => {
          return <MovieReviewItem movieReview={el} key={el.id} />;
        })}
      </ul>
      {error === false ? <></> : <h2>Oops, there was an error</h2>}
    </p>
  );
};
