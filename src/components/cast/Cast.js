import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../api';
import defaultPhoto from '../../images/nophoto.jpg';
import { CastList, CastItem, Portret, CastTitle, CastContent, Character } from './Cast.styled';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        const getFetchCast = async () => {
            try {
                const newCast = await fetchMovieCast(Number(movieId));
                return setCast(newCast.length > 0 ? newCast : []);
            } catch (error) {
                console.log(error);
            }
        }
        getFetchCast();
    }, [movieId]);

    return (
        <CastList>
            {cast && cast.map(({ id, name, original_name, profile_path, character }) => {
                const path = profile_path ? `https://image.tmdb.org/t/p/w185/${profile_path}` : defaultPhoto;
                return (
                    <CastItem key={id}>
                        <Portret src={path} alt={name} />
                        <CastTitle>{original_name}</CastTitle>
                        <CastContent>Character: <Character>{character}</Character></CastContent>
                    </CastItem>
                );
            })}
        </CastList>
    );
};

Cast.propTypes = {
    cast: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            original_name: PropTypes.string.isRequired,
            profile_path: PropTypes.string.isRequired,
            character: PropTypes.string.isRequired,
        })
    ),
    path: PropTypes.string,
};

export default Cast;