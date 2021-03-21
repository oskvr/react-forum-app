import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories';
export default configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});
