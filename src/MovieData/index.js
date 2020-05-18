import React, { useContext } from 'react';
import { MovieContext } from '../Contexts';
import MetaData from './MetaData';
import './index.css';

function MovieData() {
  const value = useContext(MovieContext);
  return value ? <MetaData /> : <h2>Please Select a Movie</h2>;
}

export default MovieData;
