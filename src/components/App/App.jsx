import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { Link, Container, Navigation } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Container>
  );
};
