import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTraidingMovies } from 'components/api';
import { Title, MoviesItem, Info } from './Home.styled';
import { Container } from '../moviedetails/MovieDetails.styled';

function Home() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const location = useLocation();

    useEffect(() => {
        async function fetchAPI() {
            try {
                const movies = await fetchTraidingMovies();
                return setMovies(movies);
            } catch (error) {
                setError('Faild to load movies');
            }
        };
        fetchAPI();
    }, []);

    return (
        <Container>
            <Title>Trending today</Title>
            {movies && <ul>{movies.map(({ id, title }) => (
                <MoviesItem key={id}><Info to={`movies/${id}`} state={{ from: location }}>
                {title}</Info></MoviesItem>))}
            </ul>}
            {error && <p>{error}</p>}
        </Container>

    );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      })
  )
}

export default Home;