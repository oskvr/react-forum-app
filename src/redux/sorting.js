import { createSlice } from '@reduxjs/toolkit';

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState: {
    sortOptions: { target: 'createdAt', order: 'desc' },
  },
  reducers: {
    updateSort: (state, action) => {
      if (action.payload === state.sortOptions.target) {
        const order = state.sortOptions.order === 'desc' ? 'asc' : 'desc';
        state.sortOptions = { ...state.sortOptions, order };
      } else {
        state.sortOptions = {
          ...state.sortOptions,
          order: 'desc',
          target: action.payload,
        };
      }
      console.log('Hejsan världen');
    },
  },
});
export const { updateSort } = sortingSlice.actions;
export default sortingSlice.reducer;
