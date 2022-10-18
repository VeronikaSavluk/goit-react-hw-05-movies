import { useState, useEffect, Suspense } from 'react';
import { Outlet, NavLink, Link, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../components/api';
import defaultPoster from '../../images/noposter.jpg'
import { Container, MovieInfo, Poster, Name, Title, Text, InfoItem } from './MovieDetails.styled';

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
        <Container>
            <NavLink to={backLinkHref}>Go back</NavLink>
            {details && details.map(({ poster_path, original_title, popularity, overview, genres }) => {
            const path = poster_path ? `https://image.tmdb.org/t/p/w154/${poster_path}` : defaultPoster;
            return (
                <MovieInfo key={original_title}>
                    <Poster src={path} alt={original_title} />
                    <div>
                    <Name>{original_title}</Name>
                    <Text>User Score: {Math.ceil(popularity)}%</Text>
                    <Title>Overview</Title>
                    <Text>{overview}</Text>
                    <Title>Genres</Title>
                    <Text>{genres.map(({ name }) => name).join(" ")}</Text>
                    </div>
                </MovieInfo>)
            })}
            <div>
                <Text>Additional information</Text>
                <ul>
                    {additionalInfo.map(({ href, text }) => (
                    <InfoItem key={href}>
                        <Link to={href} state={{ from: location.state.from }}>{text}</Link>
                    </InfoItem>))}
                </ul>
            </div>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </Container>
    )
};

export default MovieDetails;