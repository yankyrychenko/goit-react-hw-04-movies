import React, { Component } from 'react';
import { fetchMovieCredits } from '../../sevices/tmdb-api';
import defaultImage from '../../defaultimage.jpg';
import './Credits.scss';

class Credits extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    fetchMovieCredits(this.props.match.params.movieId).then(fetchedCredits => {
      this.setState({ cast: fetchedCredits.cast });
    });
  }

  render() {
    const imgUrl = 'https://image.tmdb.org/t/p/w500';

    return (
      <ul className="credits-list">
        {this.state.cast.map(({ credit_id, name, character, profile_path }) => (
          <li key={credit_id} className="actor-wrap">
            <img
              className="actor-img"
              src={profile_path ? `${imgUrl}${profile_path}` : defaultImage}
              alt=""
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Credits;
