import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeReducer from '../features/home/homeSlice';
// configureStore 创建store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home:homeReducer
  },
});
