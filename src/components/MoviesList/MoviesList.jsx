import { Link } from 'react-router-dom';
import { List, ListItem, LinkString } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title }) => (
        <ListItem key={`${id}`}>
          <LinkString to={`/movies/${id}`}>{title}</LinkString>
        </ListItem>
      ))}
    </List>
  );
};
export default MoviesList;
