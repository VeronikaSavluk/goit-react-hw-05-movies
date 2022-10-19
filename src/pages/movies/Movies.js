import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../components/api';
import { SearchForm, SearchInput, SearchBtn, SearchSvg, SearchItem, Info } from './Movies.styled';
import { Container } from '../moviedetails/MovieDetails.styled';

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

        return setSearchParams(searchQuery !== "" ? { query: searchQuery } : {});
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
        <Container>
            <SearchForm onSubmit={handleSubmit}>
                <SearchInput
                    name="search"
                    required
                    autoFocus
                />
                <SearchBtn type="submit">
                    <SearchSvg size={18} />
                </SearchBtn>
            </SearchForm>
            <ul>
                {movies && movies.map(({ id, title }) => (
                <SearchItem key={id}><Info to={`${id}`} state={{ from: location }}>
                    {title}</Info>
                </SearchItem>))}
            </ul>
        </Container>
    );
};

Movies.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ),
    handleSubmit: PropTypes.func,
};

export default Movies;