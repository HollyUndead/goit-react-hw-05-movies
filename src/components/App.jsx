import { useState } from 'react';
import { createContext } from 'react';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Loader } from './loader/loader';
import './App.css';

const Layout = lazy(() => import('./layout/layout.jsx'));
const Home = lazy(() => import('./home/home.jsx'));
const Movies = lazy(() => import('./seacrh-movie/search-movies.jsx'));
const MovieDetail = lazy(() => import('./movie-detail/movie-detail'));
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
      <Suspense fallback={Loader}>
        <StateContext.Provider value={{ movieId, setMovieId }}>
          <BrowserRouter>
            <Routes>
              <Route path="/goit-react-hw-05-movies/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                  path="/goit-react-hw-05-movies/movies"
                  element={<Movies />}
                />
                <Route
                  path="/goit-react-hw-05-movies/movie/:movieId"
                  element={<MovieDetail />}
                />
                <Route
                  path="/goit-react-hw-05-movies/movie/:movieId/cast"
                  element={<MovieDetail />}
                />
                <Route
                  path="/goit-react-hw-05-movies/movie/:movieId/review"
                  element={<MovieDetail />}
                />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </StateContext.Provider>
      </Suspense>
    </div>
  );
};
