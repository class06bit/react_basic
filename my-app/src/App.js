import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "http://leemisong.com/wp-content/uploads/2012/04/c1.jpg"
  },
  {
    title: "Full Metal Jacket",
    poster:  "http://static.rogerebert.com/uploads/movie/movie_poster/full-metal-jacket-1987/large_bleZBRX8XH6e9PR00aGCvdjvu3Q.jpg"
  },
  {
    title: "Oldboy",
    poster:  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/May_the_4th_be_with_you_%28Star_Wars_Day%29.gif/240px-May_the_4th_be_with_you_%28Star_Wars_Day%29.gif"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;
