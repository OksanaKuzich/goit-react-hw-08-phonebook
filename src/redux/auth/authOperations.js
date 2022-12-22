import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const response = await axios.post('/users/signup', credentials);
    // token.set(data.token);
    return response.data;
  } catch (e) {
    return e.message;
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const response = await axios.post('/users/login', credentials);
    // token.set(data.token);
    return response.data;
  } catch (e) {
    return e.message;
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    // token.unset();
  } catch (e) {
    return e.message;
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
  //   fetchCurrentUser,
};
export default authOperations;
