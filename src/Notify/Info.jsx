import { Notify } from 'notiflix';

export const notInfo = () =>
  Notify.info('Please Search images and photos', {
    width: '500px',
    fontSize: '28px',
  });
