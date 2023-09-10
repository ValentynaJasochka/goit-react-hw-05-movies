import { useLocation } from 'react-router-dom';
import { List, ListItem, LinkString } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title }) => (
        <ListItem key={`${id}`}>
          <LinkString to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </LinkString>
        </ListItem>
      ))}
    </List>
  );
};
export default MoviesList;
