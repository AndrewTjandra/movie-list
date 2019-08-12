import React from 'react';

var MovieEntry = ({ movie }) => (
  <div className="movieEntry">
    { movie.title }
  </div>
);

export default MovieEntry;