import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from './api';
import defaultPhoto from '../nophoto.jpg';

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
        <ul>
            {cast && cast.map(({ id, name, original_name, profile_path, character }) => {
                const path = profile_path ? `https://image.tmdb.org/t/p/w154/${profile_path}` : defaultPhoto;
                console.log(path);
                return (
                    <li key={id}>
                        <img src={path} alt={name} />
                        <p>{original_name}</p>
                        <p>Character: {character}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default Cast;