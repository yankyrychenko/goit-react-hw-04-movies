import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFoundView from './views/NotFoundView';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
);

const MoviesView = lazy(() =>
  import('./views/MoviesView.js' /* webpackChunkName: "movies-view" */),
);

const MovieDetailsView = lazy(() =>
  import(
    './views/MovieDetailsView.js' /* webpackChunkName: "movies-details-view" */
  ),
);

const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/movies" component={MoviesView} />
          <Route path="/movies/:movieId" component={MovieDetailsView} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
