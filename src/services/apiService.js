const BASE_URL = 'https://forum-api-jkrop.ondigitalocean.app';

export async function fetchThreadsByCategory(categoryId) {
  const res = await fetch(BASE_URL + `/category/${categoryId}/thread`);
  return await res.json();
}

export async function postComment(threadId, comment) {
  await fetch(
    `https://forum-api-jkrop.ondigitalocean.app/thread/${threadId}/comment`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    }
  );
}
