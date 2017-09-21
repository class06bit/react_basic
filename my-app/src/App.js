import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Star Wars"
]

const movieImages = [
  "http://leemisong.com/wp-content/uploads/2012/04/c1.jpg",
  "http://static.rogerebert.com/uploads/movie/movie_poster/full-metal-jacket-1987/large_bleZBRX8XH6e9PR00aGCvdjvu3Q.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/May_the_4th_be_with_you_%28Star_Wars_Day%29.gif/240px-May_the_4th_be_with_you_%28Star_Wars_Day%29.gif"
]


class App extends Component {
  render() {
    return (
      <div className="App">
      <Movie title={movieTitles[0]} poster={movieImages[0]}/>
      <Movie title={movieTitles[1]} poster={movieImages[1]}/> 
      <Movie title={movieTitles[2]} poster={movieImages[2]}/> 
      </div>
    );
  }
}

export default App;
