import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../components/api';
import { HiArrowUturnLeft } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";

import { SearchForm, SearchInput, SearchBtn, SearchItem } from './Movies.styled';
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
            <Link to="/"><HiArrowUturnLeft size={12}/> Go back</Link>
            <SearchForm onSubmit={handleSubmit}>
                <SearchInput
                    name="search"
                    required
                    autoFocus
                />
                <SearchBtn type="submit"><GoSearch /></SearchBtn>
            </SearchForm>
            <ul>
                {movies && movies.map(({ id, title }) => (
                <SearchItem><Link key={id} to={`${id}`} state={{ from: location }}>
                    {title}</Link>
                </SearchItem>))}
            </ul>
        </Container>
    );
};

export default Movies;