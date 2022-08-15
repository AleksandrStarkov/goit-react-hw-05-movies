import { useEffect, useState } from 'react';
import { getTrending } from '../newApi/newApi';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    getTrending()
      .then(res => setTrendingFilms(res.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <MoviesList title={'Trending today'} films={trendingFilms} />
    </>
  );
};

export default Home;
