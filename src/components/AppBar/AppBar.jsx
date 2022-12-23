import { UserMenu } from 'components/AppBar/UserMenu';
import { NavLink, Outlet } from 'react-router-dom';
import { LogMenu } from './LogMenu';
import authSelectors from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
        {isLoggIn ? <UserMenu /> : <LogMenu />}
      </header>
      <Outlet />
    </>
  );
};
