import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { fetchMovieDetails } from '../sevices/tmdb-api';
import Credits from '../components/Credits/Credits';
import Reviews from '../components/Reviews/Reviews';
import defaultImage from '../defaultimage.jpg';
import './MovieDetailsView.scss';

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    vote_average: null,
    overview: null,
    genres: [],
  };

  componentDidMount() {
    fetchMovieDetails(this.props.match.params.movieId).then(fetchedMovies => {
      this.setState({ ...fetchedMovies });
    });
  }

  handleGoBack = () => {
    this.props.history.push(this.props.location?.state?.from || '/');
  };

  render() {
    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    const { url, path } = this.props.match;
    const { poster_path, title, vote_average, overview, genres } = this.state;

    return (
      <div className="container">
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <div className="movie-wrap">
          <img
            src={poster_path ? `${imgUrl}${poster_path}` : defaultImage}
            alt={title}
            className="movie-poster"
          />
          <div className="movie-details">
            <h2>{title}</h2>
            <p>User Score: {`${Number(vote_average) * 10}%`}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>

        <p>Additional information</p>
        <ul>
          <li className="movie-item">
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li className="movie-item">
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>

        <Route path={`${path}/cast`} component={Credits} />
        <Route path={`${path}/reviews`} component={Reviews} />
      </div>
    );
  }
}

export default MovieDetailsPage;
