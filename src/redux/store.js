import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories';
import threadsReducer from './threads';
import sortingReducer from './sorting';
export default configureStore({
  reducer: {
    categories: categoriesReducer,
    threads: threadsReducer,
    sorting: sortingReducer,
  },
});
