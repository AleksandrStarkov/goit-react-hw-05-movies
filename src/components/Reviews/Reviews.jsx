import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'newApi/newApi';
import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId)
      .then(res => setReviews(res))
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p className={s.notification}>
          We don't have any reviews for this movie.
        </p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li className={s.item} key={review.id}>
              <h3 className={s.title}>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
