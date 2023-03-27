import { Outlet, NavLink } from 'react-router-dom';
import './layout.css';

const Layout = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <ul className="header">
        <li>
          <NavLink className="layout" to="/goit-react-hw-05-movies/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="layout" to="/goit-react-hw-05-movies/movies">
            Movie
          </NavLink>
        </li>
      </ul>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
