const BASE_URL = 'https://forum-api-jkrop.ondigitalocean.app';
const SANDBOX_NAME = 'OskarsAPI';
const URL = {
  THREADS: categoryId => `${BASE_URL}/category/${categoryId}/thread`,
  CATEGORIES: BASE_URL + `/sandbox/${SANDBOX_NAME}/category`,
  COMMENT: threadId => `${BASE_URL}/thread/${threadId}/comment`,
  LIKE_THREAD: threadId => `${BASE_URL}/thread/${threadId}/like`,
  LIKE_COMMENT: commentId => `${BASE_URL}/comment/${commentId}/like`,
};

export default URL;
