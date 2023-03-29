import { NavLink } from 'react-router-dom';

const MoiveDetailNavLinks = ({ ...props }) => {
  return (
    <div>
      <h4>Addithinal information</h4>
      <div className="router">
        <NavLink className="cast" to="cast">
          Cast
        </NavLink>
        <NavLink className="review" to="review">
          Review
        </NavLink>
      </div>
    </div>
  );
};

export default MoiveDetailNavLinks;
