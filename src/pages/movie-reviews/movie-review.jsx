import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieReviewItem } from 'components/movie-reviews-item/movie-reviews-item';
import { useParams } from 'react-router-dom';

export const MovieReview = () => {
  const [review, setReview] = useState({ results: [] });
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b76e2e4e0948108c3961a907afb4d0c6`
        );
        setReview(res.data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
    /* eslint-disable-next-line */
  }, []);

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
