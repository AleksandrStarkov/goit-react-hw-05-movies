import Additional from 'components/Additional/Additional';
import { useEffect, useState } from 'react';
import { useParams, Routes, Route } from 'react-router-dom';
import { getMovieDetails } from '../newApi/newApi';
import MovieDetails from 'components/MovieDetails/MovieDetails';
// import Loader from 'components/Loader/Loader';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieDetailsInfo = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      {movie && <MovieDetails movie={movie} />}
      <Additional />

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

export default MovieDetailsInfo;
