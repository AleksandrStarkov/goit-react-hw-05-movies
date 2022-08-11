import { useState, useEffect } from 'react';
import { getArticles } from 'newApi/newApi';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Searchbar from './Searchbar/Searchbar';
import Modal from './Modal/Modal';
import s from 'components/App.module.css';
import { notFound } from '../Notify/Error';
import { notInfo } from '../Notify/Info';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [searchData, setSearchData] = useState([]);
  const [dataLargeImage, setDataLargeImage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (query !== '') {
      setIsLoading(true);

      getArticles(page, query)
        .then(data => {
          setSearchData(prev => [...prev, ...data.hits]);
          setTotalHits(data.totalHits);
        })
        .catch(err => setIsError(true))
        .finally(() => setIsLoading(false));
    }
    if (query === '') {
      // setIsLoading(true);

      getArticles(page, query)
        .then(data => {
          setSearchData([...data.hits]);
        })
        .catch(err => setIsError(true))
        .finally(() => setIsInfo(true));
    }
  }, [page, query]);

  const onSubmitNewSearch = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setSearchData([]);
    setIsError(false);
    setIsInfo(false);
  };

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const onHandleClickImage = data => {
    setDataLargeImage(data);
    toogleModal();
  };

  const toogleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <div className={s.App}>
      <Searchbar onSubmit={onSubmitNewSearch} />
      <div className={s.spiner}>{isLoading && <Loader />}</div>
      <ImageGallery
        searchData={searchData}
        onHandleClickImage={onHandleClickImage}
      />
      {searchData.length > 0 && searchData.length < totalHits && (
        <Button onLoadMore={onLoadMore} />
      )}

      {isError && notFound()}
      {isInfo && notInfo()}
      {isModalOpen && (
        <Modal dataLargeImage={dataLargeImage} toogleModal={toogleModal} />
      )}
    </div>
  );
};

export default App;
