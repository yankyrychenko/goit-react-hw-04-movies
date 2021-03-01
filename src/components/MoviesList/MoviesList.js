import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieList.scss';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <li key={id} className="movie-item">
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

export default withRouter(MoviesList);
