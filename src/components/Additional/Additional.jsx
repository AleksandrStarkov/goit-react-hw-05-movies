import { NavLink, useLocation } from 'react-router-dom';
import s from './Additional.module.css';

const Additional = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  return (
    <div className={s.additional}>
      <h2 className={s.title}>Additional information</h2>
      <ul>
        <li className={s.item}>
          <NavLink to="cast" state={{ from: backLinkHref }} className={s.link}>
            Cast
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="reviews"
            state={{ from: backLinkHref }}
            className={s.link}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Additional;
