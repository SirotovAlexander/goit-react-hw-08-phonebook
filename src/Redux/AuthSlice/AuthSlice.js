import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logInUser,
  logOutUser,
  getCurrentUser,
} from 'Redux/operations';
import {
  handleRegisterUserFulfilled,
  handleLogInFulfilled,
  handleLogOutFulfilled,
  handleGetCurrentPending,
  handleGetCurrentFulfilled,
  handleGetCurrentRejected,
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
      .addCase(logInUser.fulfilled, handleLogInFulfilled)
      .addCase(logOutUser.fulfilled, handleLogOutFulfilled)
      .addCase(getCurrentUser.pending, handleGetCurrentPending)
      .addCase(getCurrentUser.fulfilled, handleGetCurrentFulfilled)
      .addCase(getCurrentUser.rejected, handleGetCurrentRejected);
  },
});

export const authReducer = authSlice.reducer;
