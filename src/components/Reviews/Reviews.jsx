import { fetchMovieReview } from 'fetchAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const negativeStatement = "We don't have any reviews for this movie.";
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchReview = async () => {
      try {
        const { results } = await fetchMovieReview(movieId);

        setReviews(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReview();
  }, [movieId]);
  return !reviews.length ? (
    <h3>{negativeStatement}</h3>
  ) : (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <p>
            <span>Author:</span> {author}
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;
