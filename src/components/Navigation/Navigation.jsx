import { UserMenu } from 'components/Navigation/UserMenu';
import { Outlet } from 'react-router-dom';
import { LogMenu } from './LogMenu';
import authSelectors from 'redux/auth/authSelectors';
import * as React from 'react';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <header>{isLoggedIn ? <UserMenu /> : <LogMenu />}</header>
      <Outlet />
    </>
  );
};
