import { Route, Routes, Navigate } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import { Register } from 'pages/Register';
import { NotFound } from 'pages/NotFound';
import { Login } from 'pages/Login';
import { Navigation } from './Navigation/Navigation';
import { GlobalStyle } from 'components/Utilit/GlobalStyle';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { PrivateRoute } from 'PrivateRoute';
import { RestrictedRoute } from 'RestrictedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Navigate to="/login" />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Box>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
};
