import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {
    movies: [
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
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "Mommy",
            poster: "https://media.vanityfair.com/photos/54bef79f023a8bfc4cad2ae9/master/w_900,c_limit/mommy-poster.jpg"
          }
        ]
      })
    }, 2000)
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
