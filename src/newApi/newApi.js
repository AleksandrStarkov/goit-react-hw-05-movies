import axios from 'axios';

export const getArticles = async (query, page = 1) => {
  const URL = 'https://pixabay.com/api/';
  const options = new URLSearchParams({
    key: '28584763-421dc035e00a550bd9f3576d4',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    // safesearch: 'true',
    page: page,
    per_page: '12',
  });

  try {
    const response = await axios.get(`${URL}?${options}`);
    // console.log(response);
    if (response.data.hits.length === 0) {
      throw new Error('error');
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};
