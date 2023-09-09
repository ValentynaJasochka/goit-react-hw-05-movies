import { useEffect, useState, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Link,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { fetchMovie, URL } from 'fetchAPI';
import {
  InformationNav,
  InformationLink,
  MovieInformation,
  Title,
  ListItem,
  GenresList,
  BackLink,
} from './MoviesDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  useEffect(() => {
    setLoading(true);
    const fetchMovieID = async () => {
      try {
        const movie = await fetchMovie(movieId);

        setMovie({ ...movie });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieID();
  }, [movieId]);
  const { poster_path, original_title, vote_average, overview, genres } = movie;

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>

      <MovieInformation>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
        />
        <div>
          <Title>{original_title}</Title>
          <p>Rating: {Math.round(vote_average)}</p>
          <Title>Overview</Title>
          <p>{overview}</p>
          <Title>Genres</Title>
          <GenresList>
            {genres?.map(genre => (
              <ListItem key={genre.id}>{genre.name}</ListItem>
            ))}
          </GenresList>
        </div>
      </MovieInformation>
      <div>
        <Title>Additional information</Title>
        <InformationNav>
          <ListItem>
            <InformationLink to="cast">Cast</InformationLink>
          </ListItem>
          <ListItem>
            <InformationLink to="reviews">Reviews</InformationLink>
          </ListItem>
        </InformationNav>

        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default MovieDetails;

// import { Suspense, useEffect, useState } from 'react';
// import {
//   Link,
//   NavLink,
//   Outlet,
//   useLocation,
//   useParams,
// } from 'react-router-dom';
// import { getMovieById } from 'services/getMovies';
// import { BASE_POSTER_URL, PLACEHOLDER } from 'utils/constants';
// import {
//   FilmWrapper,
//   StyledList,
//   ListItem,
//   FilmImg,
//   FilmTitle,
//   FilmDescr,
//   GoBackLink,
//   FilmSubTitle,
//   StyledListDescr,
// } from './MoviesDetails.module';

// const MoviesDetails = () => {
//   const { movieId } = useParams();
//   const [movie, setMovie] = useState('');
//   const location = useLocation();

//   const backLinkHref = location.state?.from ?? '/movies';
//   useEffect(() => {
//     const fetchMovieById = async () => {
//       try {
//         const movieById = await getMovieById(movieId);
//         setMovie(movieById);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//     fetchMovieById();
//   }, [movieId]);

//   return (
//     <>
//       <GoBackLink>
//         <Link to={backLinkHref}>
//           Go back<span>.</span>
//         </Link>
//       </GoBackLink>
//       <FilmWrapper>
//         <FilmImg
//           src={`${
//             movie.poster_path
//               ? BASE_POSTER_URL + movie.poster_path
//               : PLACEHOLDER + '?text=' + movie.original_title
//           }`}
//           alt="get"
//         />
//         <div>
//           <FilmTitle>{movie.original_title}</FilmTitle>
//           <FilmSubTitle>Rating: {Math.round(movie.vote_average)}</FilmSubTitle>
//           <FilmSubTitle>Overview</FilmSubTitle>
//           <FilmDescr>{movie.overview}</FilmDescr>
//           <FilmSubTitle>Genres</FilmSubTitle>
//           <StyledListDescr>
//             {movie.genres?.map(genre => (
//               <li key={genre.id}>{genre.name}</li>
//             ))}
//           </StyledListDescr>
//         </div>
//       </FilmWrapper>
//       <div>
//         <h2>Additional information</h2>
//         <StyledList>
//           <ListItem>
//             <NavLink to="cast" state={location.state}>
//               Cast<span>.</span>
//             </NavLink>
//           </ListItem>
//           <ListItem>
//             <NavLink to="reviews" state={location.state}>
//               Reviews<span>.</span>
//             </NavLink>
//           </ListItem>
//         </StyledList>
//         <Suspense fallback={<div>Loading subpage...</div>}>
//           <Outlet />
//         </Suspense>
//       </div>
//     </>
//   );
// };

// export default MoviesDetails;
