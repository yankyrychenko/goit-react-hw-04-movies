import React, { Component } from 'react';
import { searchMovies } from '../sevices/tmdb-api';
import MoviesList from '../components/MoviesList/MoviesList';
import './MoviesView.scss';

class HomeView extends Component {
  state = {
    movies: [],
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    searchMovies(this.state.query).then(fetchedMovies => {
      this.setState({ movies: fetchedMovies });
    });
    this.setState({ query: '' });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="search-form">
          <input
            type="text"
            autoComplete="off"
            placeholder="Search movies"
            value={this.state.query}
            onChange={this.handleChange}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>

        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default HomeView;
