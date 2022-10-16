import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTraidingMovies } from 'components/api';

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
        <div>
            <div as="main">
                <h1>Traiding today</h1>
                {movies && movies.map(({ id, title }) => (
                    <Link key={id} to={`movies/${id}`} state={{ from: location }}>
                        {title}
                    </Link>))}
                {error && <p>{error}</p>}
            </div>
        </div>

    );
};

export default Home;