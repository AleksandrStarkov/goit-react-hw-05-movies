import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export default function ImageGallery({ searchData, onHandleClickImage }) {
  return (
    <ul className={s.ImageGallery}>
      {searchData.map(dataEl => (
        <ImageGalleryItem
          key={dataEl.id}
          dataEl={dataEl}
          onHandleClickImage={onHandleClickImage}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  searchData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onHandleClickImage: PropTypes.func.isRequired,
};
