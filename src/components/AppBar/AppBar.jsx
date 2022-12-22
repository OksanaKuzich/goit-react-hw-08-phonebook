import { UserMenu } from 'components/AppBar/UserMenu';
import { NavLink, Outlet } from 'react-router-dom';
import { LogMenu } from './LogMenu';

export const AppBar = () => {

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
        <LogMenu />
        <UserMenu/>
      </header>
      <Outlet />
    </>
  );
};
