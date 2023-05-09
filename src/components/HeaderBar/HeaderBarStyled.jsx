import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.ul`
  display: flex;
  list-style: none;
  gap: 100px;
`;

export const NavItem = styled(NavLink)`
  background-color: teal;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  font-weight: 400;
  padding: 8px;
  letter-spacing: 0.08em;
  &.active {
    font-weight: 450;
  }
  &:hover,
  &:focus {
    color: white;
    font-weight: 500;
  }
`;
