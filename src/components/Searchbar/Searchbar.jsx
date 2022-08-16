import { useState } from 'react';
import s from './Searchbar.module.css';
// import { useLocation, useNavigate } from 'react-router-dom';

const Searchbar = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');
  // const navigate = useNavigate();
  // const location = useLocation();

  const onHadleChange = e => {
    const query = e.target.value.trim();
    setQuery(query);
  };
  // setSearchParams({ q: query });

  const onHandleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('what are you want?');
      return;
    }
    setSearchParams({ q: query });
  };

  return (
    <div className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onHandleSubmit}>
        <label>
          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={onHadleChange}
          />
        </label>
      </form>
      <button type="submit" className={s.SearchFormButton}>
        <span className={s.SearchFormButtonLabel}>Search</span>
      </button>
    </div>
  );
};

export default Searchbar;
