import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../newApi/newApi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [dataFilms, setDataFilms] = useState([]);

  useEffect(() => {
    const query = searchParams.get('q');
    if (!query) return;
    getSearchMovies(query)
      .then(res => setDataFilms(res.results))
      .catch(err => console.log(err));
  }, [searchParams, setDataFilms]);

  return (
    <>
      <SearchBar setSearchParams={setSearchParams} />
      {dataFilms && <MoviesList films={dataFilms} />}
    </>
  );
};

export default Movies;
