import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from 'Redux/operations';
import { handleRegisterUserFulfilled } from 'Redux/handlers';
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
    builder.addCase(registerUser.fulfilled, handleRegisterUserFulfilled);
  },
});

export const authReducer = authSlice.reducer;
