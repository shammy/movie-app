import React, { useState } from 'react';
import SearchBar from './Search';
import MovieData from './MovieData';
import { MovieContext, SearchContext } from './Contexts';

import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  const [movieSelected, setMovieSelected] = useState(null);
  const [searching, setSearching] = useState(false);

  async function handleSearchChange(inputValue) {
    setSearchValue(inputValue);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`);
    const data = await response.json();
    setResults(data.Search || []);
    setSearching(true);
  }

  function handleMovieSelected(movieSelected) {
    setMovieSelected(movieSelected);
    setSearching(false);
  }

  const searchContextValue = {
    handleMovieSelected,
    handleSearchChange,
    title: searchValue,
    results,
    searching,
  };

  return (
    <div className="App">
      <SearchContext.Provider value={searchContextValue}>
        <SearchBar />
      </SearchContext.Provider>
      <MovieContext.Provider value={movieSelected}>
        <MovieData />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
