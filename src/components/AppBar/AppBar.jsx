import { UserMenu } from 'components/AppBar/UserMenu';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { LogMenu } from './LogMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // console.log(isLoggedIn);

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
        {/* {isLoggedIn ? <UserMenu /> : <LogMenu />} */}
        <LogMenu />
        <UserMenu/>
      </header>
      <Outlet />
    </>
  );
};
