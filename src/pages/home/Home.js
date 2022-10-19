import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTraidingMovies } from 'components/api';
import { Title, MoviesItem } from './Home.styled';
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
            <Title>Traiding today</Title>
            {movies && <ul>{movies.map(({ id, title }) => (
                <MoviesItem><Link key={id} to={`movies/${id}`} state={{ from: location }}>
                {title}</Link></MoviesItem>))}
            </ul>}
            {error && <p>{error}</p>}
        </Container>

    );
};

export default Home;