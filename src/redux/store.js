import { configureStore } from '@reduxjs/toolkit';
import sortingReducer from './sorting';
export default configureStore({
  reducer: {
    sorting: sortingReducer,
  },
});
