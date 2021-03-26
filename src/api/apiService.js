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

export async function postThreadLike(threadId) {
  const res = await fetch(URL.LIKE_THREAD(threadId), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}
