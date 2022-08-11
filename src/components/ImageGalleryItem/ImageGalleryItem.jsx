import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ dataEl, onHandleClickImage }) => {
  const { webformatURL, tags, largeImageURL } = dataEl;

  return (
    <li
      className={s.ImageGalleryItem}
      onClick={() => onHandleClickImage({ tags, largeImageURL })}
    >
      <img className={s.ImageGalleryImage} src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  onHandleClickImage: PropTypes.func.isRequired,
  dataEl: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
