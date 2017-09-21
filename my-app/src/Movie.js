import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
  render(){
    return (
      <div>
      <MoviePoster />
      <h1>Hello this is Movie</h1>
      </div>
    )
  }
}

class MoviePoster extends Component{
  render(){
    return(
      <img src="http://leemisong.com/wp-content/uploads/2012/04/c1.jpg" />
    )
  }
}

export default Movie;
