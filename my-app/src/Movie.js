import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Movie.css';

class Movie extends Component{

  static propTypes = {
    title: propTypes.stirng,
    poster: propTypes.string
  }

  render(){
    return (
      <div>
      <MoviePoster poster={this.props.poster}/>
      <h1>{this.props.title}</h1>
      </div>
    )
  }
}

class MoviePoster extends Component{

  static propTypes = {
    poster : propTypes.stirng
  }

  render(){
    return(
     <img src={this.props.poster} alt="poster" />
    )
  }
}

export default Movie;
