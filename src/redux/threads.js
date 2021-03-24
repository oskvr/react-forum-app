import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const fetchThreadsByCategoryId = createAsyncThunk(
  'threads/fetchCategoryThreads',
  async categoryId => {
    const res = await fetch(
      `https://forum-api-jkrop.ondigitalocean.app/category/${categoryId}/thread`
    );
    const data = await res.json();
    return data;
  }
);
export const fetchThread = createAsyncThunk(
  'threads/fetchThread',
  async ({ threadId, categoryId }) => {
    const commentRes = await fetch(
      `https://forum-api-jkrop.ondigitalocean.app/thread/${threadId}/comment`
    );
    const comments = await commentRes.json();
    const threadRes = await fetch(
      `https://forum-api-jkrop.ondigitalocean.app/category/${categoryId}/thread`
    );
    const threads = await threadRes.json();
    const { content, createdAt, likes, title, __v, _id } = threads.find(
      thread => thread._id === threadId
    );
    const merged = { _id, title, content, createdAt, likes, comments, __v };
    return merged;
  }
);

export const postNewComment = createAsyncThunk(
  'threads/postNewComment',
  async ({ threadId, comment }) => {
    const res = await fetch(
      `https://forum-api-jkrop.ondigitalocean.app/thread/${threadId}/comment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment),
      }
    );
    const data = await res.json();
    console.log('Hejsan');
    return data;
  }
);
export const postThreadLike = createAsyncThunk(
  'threads/postThreadLike',
  async threadId => {
    const res = await fetch(
      `https://forum-api-jkrop.ondigitalocean.app/thread/${threadId}/like`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    return data;
  }
);
export const threadsSlice = createSlice({
  name: 'threads',
  initialState: {
    categoryThreads: {
      data: [],
      isLoading: false,
    },
    thread: {
      data: {},
      isLoading: false,
    },
    isLoadingNewComment: false,
  },
  reducers: {
    clearCategoryThreads: state => {
      state.categoryThreads.data = [];
    },
    clearThread: state => {
      state.thread.data = {};
    },
  },
  extraReducers: {
    [fetchThreadsByCategoryId.pending]: state => {
      state.categoryThreads.isLoading = true;
    },
    [fetchThreadsByCategoryId.fulfilled]: (state, action) => {
      state.categoryThreads.data = action.payload;
      state.categoryThreads.isLoading = false;
    },

    [fetchThread.pending]: state => {
      state.thread.isLoading = true;
    },
    [fetchThread.fulfilled]: (state, action) => {
      state.thread.data = action.payload;
      state.thread.isLoading = false;
    },
    [postThreadLike.fulfilled]: (state, action) => {
      state.thread.data = {
        ...state.thread.data,
        likes: [...state.thread.data.likes, action.payload],
      };
    },
    [postNewComment.pending]: state => {
      state.isLoadingNewComment = true;
    },
    [postNewComment.fulfilled]: (state, action) => {
      state.thread.data = {
        ...state.thread.data,
        comments: [...state.thread.data.comments, action.payload],
      };
      state.isLoadingNewComment = false;
    },
  },
});
export const { clearCategoryThreads, clearThread } = threadsSlice.actions;
export default threadsSlice.reducer;
