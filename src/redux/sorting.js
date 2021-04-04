import { createSlice } from '@reduxjs/toolkit';

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState: {
    target: 'likes',
    order: 'desc',
  },
  reducers: {
    updateSort: (state, action) => {
      state.target = action.payload;
    },
  },
});
export const { updateSort } = sortingSlice.actions;
export default sortingSlice.reducer;
