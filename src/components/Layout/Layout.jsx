import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
      <UserMenu />
      <Outlet />
    </header>
  );
};
