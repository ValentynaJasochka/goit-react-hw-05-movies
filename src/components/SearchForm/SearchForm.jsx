import { useState } from 'react';
import { Form, Input, SearchButton } from './SearchForm.styled';
const SearchForm = ({ searchMovie }) => {
  const [movie, setMovie] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    searchMovie({ movie });
    console.log(movie);
    setMovie('');
  };

  const handleMovie = event => {
    setMovie(event.target.value.toLowerCase());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search movies"
        autoFocus
        value={movie}
        onChange={handleMovie}
      />
      <SearchButton type="submit" disabled={!movie}>
        Search
      </SearchButton>
    </Form>
  );
};

export default SearchForm;
