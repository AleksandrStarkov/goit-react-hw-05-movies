import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';

const MoviesList = ({ title, films }) => {
  const location = useLocation();

  return (
    <div className={s.section}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {films.map(el => (
          <li className={s.item} key={el.id}>
            <Link to={`/movies/${el.id}`} state={location}>
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  title: PropTypes.string,
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ),
};

export default MoviesList;
