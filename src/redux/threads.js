import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const fetchThreads = createAsyncThunk(
  'threads/fetchThreads',
  async categoryId => {
    const res = await fetch(
      `https://forum-api-jkrop.ondigitalocean.app/category/${categoryId}/thread`
    );
    return await res.json();
  }
);
export const threadsSlice = createSlice({
  name: 'threads',
  initialState: {
    threads: [],
  },
  reducers: {
    clearThreads: state => {
      state.threads = [];
    },
  },
  extraReducers: {
    [fetchThreads.fulfilled]: (state, action) => {
      state.threads = action.payload;
    },
  },
});
export const { clearThreads } = threadsSlice.actions;
export default threadsSlice.reducer;
