import { useState } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onHadleChange = e => {
    const query = e.target.value.trim();
    setQuery(query);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onHandleSubmit}>
        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={onHadleChange}
        />
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
