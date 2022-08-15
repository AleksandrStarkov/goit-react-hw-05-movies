import { useState } from 'react';
import s from './Searchbar.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const onHadleChange = e => {
    const query = e.target.value.trim();
    setQuery(query);
  };
  // setSearchParams({ q: query });

  const onHandleSubmit = e => {
    e.preventDefault();
    navigate(`?q=${query}`, {
      state: location.state,
    });
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
