import React, { FC } from 'react';
import { SearchBar } from './components/Search-bar/Search-bar';
import { Cards } from './components/Cards/Cards';
import './App.scss';

export const App: FC = (): JSX.Element => (
  <div className="app">
    <header className="app__header">
      <SearchBar />
    </header>

    <main className="app__main">
      <Cards />
    </main>

    <footer className="app__footer">
      <a
        className="contacts__gh"
        href="https://github.com/eugenemp"
        rel="noreferrer"
        target="_blank"
      >
        eugenemp
      </a>
    </footer>
  </div>
);
