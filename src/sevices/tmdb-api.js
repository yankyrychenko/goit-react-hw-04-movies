import axios from 'axios';

export function fetchMovies() {
  return axios
    .get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=2543bbb99e32ec653e60f1468ff8de89`,
    )
    .then(response => response.data.results);
}

export function searchMovies(searchQuery) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=2543bbb99e32ec653e60f1468ff8de89&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
    )
    .then(response => response.data.results);
}

export function fetchMovieDetails(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=2543bbb99e32ec653e60f1468ff8de89&language=en-US`,
    )
    .then(response => response.data);
}

export function fetchMovieCredits(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=2543bbb99e32ec653e60f1468ff8de89&language=en-US`,
    )
    .then(response => response.data);
}

export function fetchMovieReviews(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=2543bbb99e32ec653e60f1468ff8de89&language=en-US&page=1`,
    )
    .then(response => response.data);
}
