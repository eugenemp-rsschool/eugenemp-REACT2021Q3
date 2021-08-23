import React, { FC } from 'react';
import './Search-bar.scss';

export const SearchBar: FC = (): JSX.Element => (
  <form className="search-bar">
    <div className="search-bar__icon" />
    <input
      className="search-bar__input"
      type="text"
      title="Search"
      placeholder="Search.."
    />
    <button className="search-bar__btn" type="submit">
      Go!
    </button>
  </form>
);
