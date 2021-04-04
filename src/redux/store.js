// import { configureStore } from '@reduxjs/toolkit';
// import categoriesReducer from './categories';
// import threadsReducer from './threads';
// export default configureStore({
//   reducer: {
//     categories: categoriesReducer,
//     threads: threadsReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@rtk-incubator/rtk-query';
import { forumApi } from './services/forum';
import sortingReducer from './sorting';

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [forumApi.reducerPath]: forumApi.reducer,
    sorting: sortingReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(forumApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
