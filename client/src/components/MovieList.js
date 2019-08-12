import React from 'react';
import MovieEntry from './MovieEntry.js';

var MovieList = ({ Movies }) => (
  <div>
    {
      Movies.map((movie) => (
        <MovieEntry
          key={movie.title}
          movie={movie}
        />
      ))
    }
  </div>
);

export default MovieList;