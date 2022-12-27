import { UserMenu } from 'components/Navigation/UserMenu';
import { NavLink, Outlet } from 'react-router-dom';
import { LogMenu } from './LogMenu';
import authSelectors from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import * as React from 'react';


export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <header>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        {isLoggedIn ? <UserMenu /> : <LogMenu />}
      </header>
      <Outlet />
    </>
  );
};
