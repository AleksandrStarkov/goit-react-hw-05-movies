import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/';
const KEY = '8480501c25fe2e75305c7a4c8973aec6';

export const getTrending = async () => {
  try {
    const response = await axios.get(
      `${URL}/trending/movie/week?api_key=${KEY}`,
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetails = async id => {
  try {
    const response = await axios.get(`${URL}movie/${id}?api_key=${KEY}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCredits = async id => {
  try {
    const response = await axios.get(
      `${URL}movie/${id}/credits?api_key=${KEY}`,
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(
      `${URL}movie/${id}/reviews?api_key=${KEY}`,
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovies = async query => {
  return await axios(`${URL}search/movie`, {
    params: {
      api_key: KEY,
      query: query,
    },
  }).then(response => response.data);
};
