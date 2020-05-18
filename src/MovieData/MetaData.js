import React, { useContext } from 'react';
import { MovieContext } from '../Contexts';
import './index.css';

function MetaData() {
  const { Poster, Title, Type, Year } = useContext(MovieContext);
  return (
    <div>
      <img src={Poster} alt={Title} />
      <h3 className="movie-info">{Title}</h3>
      <div className="movie-info">
        <div className="info-section">
          <label>Type:</label>
          <span>{Type}</span>
        </div>
        <div className="info-section">
          <label>Year:</label>
          <span>{Year}</span>
        </div>
      </div>
    </div>
  );
}

export default MetaData;
