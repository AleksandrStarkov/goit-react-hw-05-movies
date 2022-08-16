import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from './MovieDetails.module.css';

const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const backLinkHref = location.state ?? '/movies';
  return (
    <>
      {movie.length !== 0 && (
        <>
          <Link to={backLinkHref} className={s.btnGoBack}>
            Go back
          </Link>
          <div className={s.section}>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <div className={s.infoContainer}>
              <h2>{movie.title}</h2>
              <p>User Score: {movie.vote_average * 10}%</p>
              <p>Overview:</p>
              <p>{movie.overview}</p>
              <div>
                <p>Genres: </p>
                <ul>
                  {movie.genres &&
                    movie.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ),
  }),
};

export default MovieDetails;
