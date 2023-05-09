import { NavItem, NavBar } from '../HeaderBar/HeaderBarStyled';

const HeaderBar = () => {
  return (
    <NavBar>
      <li>
        <NavItem to="/">Home</NavItem>
      </li>
      <li>
        <NavItem to="/movies">Movies</NavItem>
      </li>
    </NavBar>
  );
};

export default HeaderBar;
