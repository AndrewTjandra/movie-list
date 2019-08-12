// This is where most of your work will be done
import React, { Component } from 'react';
import MovieList from './MovieList';
import exampleMovieList from '../data/exampleMovieList.js';


class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: null
    }
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <MovieList Movies={exampleMovieList} />
      </div>
    )
  }
}

export default App;