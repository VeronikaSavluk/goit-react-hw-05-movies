import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTraidingMovies = async () => {
    const { data } = await axios.get(`trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    return data.results;
};

export const fetchSearchMovies = async (query) => {
    const { data } = await axios.get(`search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=en-US`);
    return data.results;
};

export const fetchMovieDetails = async (id) => {
    const { data } = await axios.get(`movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    return data;
};

export const fetchMovieCast = async (id) => {
    const { data } = await axios.get(`movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    return data.cast;
};

export const fetchMovieReviews = async (id) => {
    const { data } = await axios.get(`movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    return data.results;
};