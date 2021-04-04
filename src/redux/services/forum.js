import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query';

// Define a service using a base URL and expected endpoints
export const forumApi = createApi({
  reducerPath: 'forumApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://forum-api-jkrop.ondigitalocean.app/',
  }),
  entityTypes: ['Threads'],
  refetchOnFocus: true,
  endpoints: build => ({
    getCategories: build.query({
      query: () => `sandbox/TestAPI/category`,
    }),
    getThreads: build.query({
      query: categoryId => `category/${categoryId}/thread`,
      provides: result =>
        result.map(({ _id }) => ({ type: 'Threads', id: _id })),
    }),
    addLike: build.mutation({
      query(threadId) {
        return {
          url: `thread/${threadId}/like`,
          method: 'POST',
        };
      },
      invalidates: (_, _id) => [{ type: 'Threads', id: _id }],
    }),
    addThread: build.mutation({
      query({ categoryId, body }) {
        return {
          url: `category/${categoryId}/thread`,
          method: 'POST',
          body,
        };
      },
      invalidates: ['Threads'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCategoriesQuery,
  useGetThreadsQuery,
  useAddLikeMutation,
  useAddThreadMutation,
} = forumApi;
