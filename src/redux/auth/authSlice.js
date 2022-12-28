import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    },
    [authOperations.register.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    [authOperations.register.pending]: (state, action) => {
      state.isLoading = true;
    },
    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    },
    [authOperations.logIn.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    [authOperations.logIn.pending]: (state, action) => {
      state.isLoading = true;
    },
    [authOperations.logOut.fulfilled]: (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
      state.isLoading = false;
    },
    [authOperations.logOut.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    [authOperations.logOut.pending]: (state, action) => {
      state.isLoading = true;
    },
    [authOperations.fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    },
    [authOperations.fetchCurrentUser.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    [authOperations.fetchCurrentUser.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const authReducer = authSlice.reducer;
