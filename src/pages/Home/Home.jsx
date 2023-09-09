import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies } from 'fetchAPI';
import { useEffect, useState } from 'react';
import { Title } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchPage = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        if (!results.length) {
          return;
        }
        // const arrMovies = results.map(({ original_name }) => ({
        //   original_name,
        // }));
        setTrendingMovies(results);

        // console.log(arrMovies);
      } catch (error) {
        // console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPage();
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};
export default Home;
