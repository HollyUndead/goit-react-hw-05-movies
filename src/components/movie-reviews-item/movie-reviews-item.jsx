export const MovieReviewItem = ({ ...props }) => {
  const { author, content } = props.movieReview;
  return (
    <li>
      <h2 style={{ display: 'inline' }}>Author: {author}</h2>
      <p>{content}</p>
    </li>
  );
};
