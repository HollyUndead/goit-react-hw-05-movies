import { useState, useEffect } from 'react';
import axios from 'axios';
import { MovieReviewItem } from 'components/movie-reviews-item/movie-reviews-item';

export const MovieReview = ({ ...props }) => {
  const { idForFetch } = props;
  const [review, setReview] = useState();
  useEffect(() => {
    async function fetchData() {
      console.log(idForFetch);
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${idForFetch}/reviews?api_key=b76e2e4e0948108c3961a907afb4d0c6`
        );
        console.log(res.data.results);
        setReview(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
    /* eslint-disable-next-line */
  }, []);
  console.log(review);

  if (review === undefined) {
    return <></>;
  }
  return (
    <ul className="review-list">
      {review.results.map(el => {
        return <MovieReviewItem movieReview={el} key={el.id} />;
      })}
    </ul>
  );
};
