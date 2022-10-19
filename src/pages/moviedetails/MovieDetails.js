import PropTypes from 'prop-types';
import { useState, useEffect, Suspense } from 'react';
import { Outlet, NavLink, Link, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../components/api';
import defaultPoster from '../../images/noposter.jpg';
import { HiArrowUturnLeft } from 'react-icons/hi2';
import { Container, MovieInfo, Additionion, Poster, Name, Title, Text, InfoItem } from './MovieDetails.styled';

const additionalInfo = [
    {href: "cast", text: "Cast"},
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
            <NavLink to={backLinkHref}><HiArrowUturnLeft size={12} /> Go back</NavLink>
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
            <Additionion>
                <Text>Additional information</Text>
                <ul>
                    {additionalInfo.map(({ href, text }) => (
                    <InfoItem key={href}>
                        <Link to={href} state={{ from: location.state.from }}>{text}</Link>
                    </InfoItem>))}
                </ul>
            </Additionion>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </Container>
    )
};

MovieDetails.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.exact({
        poster_path: PropTypes.string,
        original_title: PropTypes.string.isRequired,
        popularity: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(
            PropTypes.exact({
            name: PropTypes.string.isRequired,
        })),
      })
    ),
    backLinkHref: PropTypes.string,
    additionalInfo: PropTypes.arrayOf(
    PropTypes.exact({
        href: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
    path: PropTypes.string,
}

export default MovieDetails;