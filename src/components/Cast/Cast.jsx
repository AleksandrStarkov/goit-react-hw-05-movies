import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieCredits } from 'newApi/newApi';
import s from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(response => setCast(response.data.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {cast !== [] && (
        <ul className={s.list}>
          {cast.map(
            el =>
              el.profile_path && (
                <li key={el.id} className={s.card}>
                  {el.profile_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                      alt={el.name}
                    />
                  )}
                  <div className={s.info}>
                    <h3>{el.name}</h3>
                    <p>
                      Character: <span className={s.text}> {el.character}</span>
                    </p>
                  </div>
                </li>
              ),
          )}
        </ul>
      )}
    </>
  );
};

Cast.propTypes = PropTypes.func.isRequired;

export default Cast;
