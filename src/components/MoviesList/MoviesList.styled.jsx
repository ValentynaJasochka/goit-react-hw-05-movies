import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListItem = styled.li`
  list-style: none;
`;
export const LinkString = styled(Link)`
  display: inline-block;
  font-size: 20px;

  text-decoration: none;
  color: black;
  font-weight: 500;

  &:hover,
  :focus {
    background-color: navy;
    color: white;
  }
`;
