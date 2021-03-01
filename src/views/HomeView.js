import React, { Component } from 'react';
import { fetchMovies } from '../sevices/tmdb-api';
import MoviesList from '../components/MoviesList/MoviesList';

class HomeView extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchMovies().then(fetchedMovies => {
      this.setState({ movies: fetchedMovies });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Trending today</h1>
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default HomeView;
