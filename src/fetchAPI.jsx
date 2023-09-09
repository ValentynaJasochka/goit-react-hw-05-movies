import axios from 'axios';

export const URL = 'https://api.themoviedb.org/3';
const API_KEY = '1458aa5a0f3768251d977a5078bcec84';

export async function fetchTrendingMovies() {
  const url = `${URL}/trending/movie/day?api_key=${API_KEY}&page=1&language=en-US`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovie(id) {
  const url = `${URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data;
}
export async function fetchSearchMovies(search) {
  const url = `${URL}/search/movie?api_key=${API_KEY}&query=${search}&language=en-US&page=1&include_adult=false`;
  const response = await axios.get(url);
  return response.data;
}
export async function fetchMovieCast(id) {
  const url = `${URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await axios.get(url);
  return response.data;
}
export async function fetchMovieReview(id) {
  const url = `${URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data;
}
// export const fetchSearchApi = async query => {
//   const { data } = await axios.get(
//     `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
//   );
//   return data;
// };
// export const fetchMovieDetails = async id => {
//   const { data } = await axios.get(
//     `/movie/${id}?api_key=${API_KEY}&language=en-US`
//   );
//   return data;
// };
// export const fetchMovieGenres = async () => {
//   const { data } = await axios.get(
//     `/genre/movie/list?api_key=${API_KEY}&language=en-US`
//   );
//   return data;
// };
// export const fetchCast = async id => {
//   const { data } = await axios.get(
//     `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
//   );
//   return data;
// };
// export const fetchReview = async id => {
//   const { data } = await axios.get(
//     `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
//   );
//   return data;
// };
