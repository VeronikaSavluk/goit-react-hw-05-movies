import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../components/api';

function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("query") ?? "";

    const handleSubmit = e => {
        e.preventDefault();
        const { elements: { search }, } = e.currentTarget;
    const searchQuery = search.value.trim().toLowerCase();
    if (!searchQuery) {
        return;
        };
    return setSearchParams(searchQuery !== "" ? {query: searchQuery} : {});
    };

    useEffect(() => {
        if (!query) {
            return;
        };
        async function fetchSearchAPI() {
            try {
                const results = await fetchSearchMovies(query);
                setMovies(results);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSearchAPI();
    }, [query]);

    return (
        <main>
            <Link to="/">Go back</Link>
            <form onSubmit={handleSubmit}>
                <input
                    name="search"
                    required
                    autoFocus
                />
                <button type="submit" />
            </form>
            <div>
                {movies && movies.map(({ id, title }) => (
                    <Link key={id} to={`${id}`} state={{ from: location }}>
                        {title}
                    </Link>))}
                </div>
        </main>
    );
};

export default Movies;