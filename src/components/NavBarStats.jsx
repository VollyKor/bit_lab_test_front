import { NavLink, useLocation } from 'react-router-dom';

export default function NavBarStats() {
  const location = useLocation();
  console.log(location);

  const isUserPage = location.pathname.includes('/stats/user');

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <NavLink
            exact
            to="/"
            className="navbar__link"
            activeClassName="active"
          >
            Main page
          </NavLink>
        </li>
        <li className="navbar__item">
          <span className="navarrow">{'>'}</span>
          <NavLink
            exact
            to="/stats"
            className="navbar__link"
            activeClassName="active"
          >
            User Statistics
          </NavLink>
        </li>
        {isUserPage && (
          <li className="navbar__item">
            <span className="navarrow">{'>'}</span>
            <NavLink
              to="/stats/user"
              className="navbar__link"
              activeClassName="active"
            >
              Username
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
