import React, { Component } from 'react';
import { fetchMovieReviews } from '../../sevices/tmdb-api';
import './Reviews.scss';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetchMovieReviews(this.props.match.params.movieId).then(fetchedReviews => {
      this.setState({ reviews: fetchedReviews.results });
    });
  }

  render() {
    return (
      <ul>
        {this.state.reviews.length ? (
          this.state.reviews.map(({ id, content, author }) => (
            <li key={id} className="review-item">
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don`t have any reviews for this movie.</p>
        )}
      </ul>
    );
  }
}

export default Reviews;
