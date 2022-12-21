import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const response = await axios.post('/users/signup', credentials);
    // token.set(data.token);
    return response.data;
  } catch (e) {
    return e.message;
  }
});

const AuthOperations = {
  register,
  //   logOut,
  //   logIn,
  //   fetchCurrentUser,
};
export default AuthOperations;
