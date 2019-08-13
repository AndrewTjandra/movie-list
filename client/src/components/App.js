// This is where most of your work will be done
import React, { Component } from 'react';
import MovieList from './MovieList';
import Search from './Search';
import exampleMovieList from '../data/exampleMovieList.js';


class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: null
    }
  }

  onClickSearchHandler(e) {
    console.log(e.target);
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <Search onClickSearchHandler={this.onClickSearchHandler.bind(this)} />
        <MovieList Movies={exampleMovieList} />
      </div>
    )
  }
}

export default App;