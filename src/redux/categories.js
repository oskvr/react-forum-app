import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await fetch(
      'https://forum-api-jkrop.ondigitalocean.app/sandbox/TestAPI/category'
    );
    const data = await response.json();
    return data;
  }
);
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export default categoriesSlice.reducer;
