import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    loadCategories: (state, categories) => {
      state.categories = categories.payload;
    },
    addPost: (state, post) => {
      state.posts.push(post.payload);
      state.lastPostId++;
    },
    removePost: (state, id) => {
      state.posts = state.posts.filter(post => post.id !== id.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
