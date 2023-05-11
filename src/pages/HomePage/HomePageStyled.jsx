import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ol`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 5px;
  padding: 0px;
  margin-left: 29px;
`;

const Item = styled.li`
  border: none;
  border-radius: 4px;
  :hover {
    color: orangered;
  }
`;

const LinkItem = styled(Link)`
  display: block;
  padding: 5px;
  text-decoration: none;
  color: #212121;
  width: 100%;
  :hover {
    color: blue;
  }
`;
export { List, Item, LinkItem };
