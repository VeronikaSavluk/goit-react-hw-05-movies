import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Home from 'pages/home/Home';
import Movies from '../pages/movies/Movies';
import MovieDetails from '../pages/moviedetails/MovieDetails';

const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

export const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
    </Routes>
    </>
  );
};