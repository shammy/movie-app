import React, { useContext } from 'react';
import { SearchContext } from '../Contexts';
import './index.css';

const SearchList = () => {
  const { results, handleMovieSelected } = useContext(SearchContext);
  return (
    <ul className="results">
      {results.map((item, index) => {
        return (
          <li key={index} onClick={() => handleMovieSelected(item)}>
            <img src={item.Poster} alt={item.Title} />
            {item.Title}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchList;
