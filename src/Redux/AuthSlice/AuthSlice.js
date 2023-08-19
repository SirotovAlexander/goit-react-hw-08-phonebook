import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logOutUser } from 'Redux/operations';
import {
  handleRegisterUserFulfilled,
  handleLogOutFulfilled,
} from 'Redux/handlers';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, handleRegisterUserFulfilled)
      .addCase(logOutUser.fulfilled, handleLogOutFulfilled);
  },
});

export const authReducer = authSlice.reducer;
