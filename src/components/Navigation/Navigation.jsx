import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const setActiveLinkClass = ({ isActive }) =>
  isActive ? `${s.navigation} ${s.activeNavigation}` : s.navigation;

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={setActiveLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={setActiveLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
