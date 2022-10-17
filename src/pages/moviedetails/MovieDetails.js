import { useState, useEffect } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../components/api';
import defaultPoster from '../../noposter.jpg'

const additionalInfo = [
    {href: "cast", text: "Cast" },
    {href: "reviews", text: "Reviews"},
];

const MovieDetails = () => {
    const { movieId } = useParams();
    const [details, setDetails] = useState(null);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/movies';

    useEffect(() => {
        const getFetchDetails = async () => {
            try {
                const newDetails = await fetchMovieDetails(Number(movieId));
                return setDetails([newDetails]);
            } catch (error) {
                console.log(error);
            }
        };
        getFetchDetails();
    }, [movieId]);

    return (
        <main>
            <Link to={backLinkHref}>Go back</Link>
            {details && details.map(({ poster_path, original_title, popularity, overview, genres: { name } }) => {
                const path = poster_path ? `https://image.tmdb.org/t/p/w45/${poster_path}` : defaultPoster;
                return (
                    <div key={original_title}>
                        <img src={path} alt={original_title} />
                        <h2>{original_title}</h2>
                        <p>User Score: {Math.ceil(popularity)}%</p>
                        <h3>Overview</h3>
                        <p>{overview}</p>
                        <h3>Genres</h3>
                        <p>{name}</p>
                    </div>)
            })}
            <div>
                <p>Additional information</p>
                {additionalInfo.map(({ href, text }) => (<Link to={href} key={href} state={{from: location.state.from}}>{text}</Link>))}
            </div>
            <Outlet />
        </main>
    )
};

export default MovieDetails;