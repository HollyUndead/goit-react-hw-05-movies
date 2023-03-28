import { useState } from 'react';
import { createContext } from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Loader } from './loader/loader';
import { MovieCast } from 'pages/movie-cast/movie-cast';
import { MovieReview } from 'pages/movie-reviews/movie-review';
import './App.css';

const Layout = lazy(() => import('./layout/layout'));
const Home = lazy(() => import('../pages/home/home'));
const SearchMovies = lazy(() => import('../pages/search-movies/search-movies'));
const MovieDetail = lazy(() => import('../pages/movie-detail/movie-detail'));
export const StateContext = createContext();

export const App = () => {
  const [movieId, setMovieId] = useState();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Suspense fallback={<Loader />}>
        <StateContext.Provider value={{ movieId, setMovieId }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/movies" element={<SearchMovies />} />
              <Route path="/movie/:movieId/" element={<MovieDetail />}>
                <Route path="/movie/:movieId/cast" element={<MovieCast />} />
                <Route
                  path="/movie/:movieId/review"
                  element={<MovieReview />}
                />
              </Route>
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </StateContext.Provider>
      </Suspense>
    </div>
  );
};
