import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../api';
import { ReviewsList, ReviewsItem, ReviewsTitle, ReviewsContent } from './Reviews.styled';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        const getFetchReviews = async () => {
            try {
                const newReviews = await fetchMovieReviews(Number(movieId));
                return setReviews(newReviews.length > 0
                    ? newReviews
                    : []);
            } catch (error) {
                console.log(error);
            }
        }
        getFetchReviews();
    }, [movieId]);

    return (
        <ReviewsList>
            {reviews.length === 0 && <p>We don't have any reviews for this movie.</p>}
            {reviews.length > 0 && reviews.map(({ id, author, content }) => {
                return (
                    <ReviewsItem key={id}>
                        <ReviewsTitle>Author: {author}</ReviewsTitle>
                        <ReviewsContent>{content}</ReviewsContent>
                    </ReviewsItem>
                );
            })}
        </ReviewsList>
    );
};

export default Reviews;