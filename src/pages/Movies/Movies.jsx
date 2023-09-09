import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchSearchMovies } from 'fetchAPI';
const Movies = () => {
  const [search, setSearch] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const currentMovie = search.get('movie');
    console.dir(currentMovie);
    if (!currentMovie) return;
    setLoading(true);
    const fetchSearch = async () => {
      try {
        const { results } = await fetchSearchMovies(currentMovie);
        // console.log(results);
        if (!results.length) {
          return;
        }

        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSearch();
  }, [search]);
  return (
    <>
      <SearchForm searchMovie={setSearch} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
export default Movies;
