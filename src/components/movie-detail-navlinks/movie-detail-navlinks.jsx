import { useEffect, useRef } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';

const MoiveDetailNavLinks = ({ ...props }) => {
  const { idForFetch } = props;
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const startLocation = useRef();

  useEffect(() => {
    startLocation.current = currentLocation.pathname
      .replace('/cast', '')
      .replace('/review', '');
    /* eslint-disable-next-line */
  }, []);

  return (
    <div>
      <h4>Addithinal information</h4>
      <div className="router">
        <NavLink
          className="cast"
          to={startLocation.current + '/cast'}
          onClick={ev => {
            ev.preventDefault();
            navigate(startLocation.current + '/cast', {
              state: { ...currentLocation.state, idForFetch: idForFetch },
            });
          }}
        >
          Cast
        </NavLink>
        <NavLink
          className="review"
          to={startLocation.current + '/review'}
          onClick={ev => {
            ev.preventDefault();
            navigate(startLocation.current + '/review', {
              state: { ...currentLocation.state, idForFetch: idForFetch },
            });
          }}
        >
          Review
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MoiveDetailNavLinks;
