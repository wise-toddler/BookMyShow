// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './errorSlice';
import loaderReducer from './loaderSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    error: errorReducer,
    loader: loaderReducer,
    user: userReducer,
  },
});
