import URL from './apiEndpointConstants';

export async function postComment(threadId, comment) {
  const res = await fetch(URL.COMMENT(threadId), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
  const data = await res.json();
  return data;
}
//   export const postThreadLike = createAsyncThunk(
//     'threads/postThreadLike',
//     async threadId => {
//       const res = await fetch(
//         `https://forum-api-jkrop.ondigitalocean.app/thread/${threadId}/like`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       const data = await res.json();
//       return data;
//     }
//   );
