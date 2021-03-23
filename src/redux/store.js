import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories';
import threadsReducer from './threads';
export default configureStore({
  reducer: {
    categories: categoriesReducer,
    threads: threadsReducer,
  },
});
