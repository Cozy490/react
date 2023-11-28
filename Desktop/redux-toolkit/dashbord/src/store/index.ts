import { configureStore } from '@reduxjs/toolkit';
import aboutSlice from './slices/aboutSlice';
import homeSlice from './slices/homeSlice';

export const store = configureStore({
  reducer: {
    aboutSlice: aboutSlice,
    homeSlice:homeSlice
    // ...其他的 reducers
  },
});

// 定义 AppDispatch 类型
export type AppDispatch = typeof store.dispatch