import { createSlice } from '@reduxjs/toolkit';

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState: {
    sortOptions: { target: 'createdAt', order: 'desc' },
  },
  reducers: {
    updateSort: (state, action) => {
      const targetStateIsSame = action.payload === state.sortOptions.target;
      if (targetStateIsSame) {
        const order = state.sortOptions.order === 'desc' ? 'asc' : 'desc';
        state.sortOptions = { ...state.sortOptions, order };
      } else {
        state.sortOptions = {
          ...state.sortOptions,
          target: action.payload,
        };
      }
    },
  },
});
export const { updateSort } = sortingSlice.actions;
export default sortingSlice.reducer;
