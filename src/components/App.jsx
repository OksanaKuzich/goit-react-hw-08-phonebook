import { Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';
import { AppBar } from './AppBar/AppBar';
import { Home } from 'pages/Home';
import { GlobalStyle } from 'components/Utilit/GlobalStyle';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Box>
      <GlobalStyle />
    </>
  );
};
