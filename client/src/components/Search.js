import React from 'react';

var Search = ({ onClickSearchHandler }) => (
  <div className="search">
    <h4>Movie Search</h4>
    <input type="text" />
    <button onClick={onClickSearchHandler}>Search</button>
  </div>
);

export default Search;