import { lazy } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from 'pages/home/Home';
import Movies from '../pages/movies/Movies';
import MovieDetails from '../pages/moviedetails/MovieDetails';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const App = () => {
  return (
    <>
    <header>
      <nav>
        {navItems.map(({ href, text }) => (<NavLink to={href} key={href}>{text}
        </NavLink>))}
      </nav>
    </header>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
    </Routes>
    </>
  );
};
