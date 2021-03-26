import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import URL from '../api/apiEndpointConstants';
import fetcher from '../utils/fetcher';
import { useCategoryThreads } from './useCategoryThreads';

export function useThread() {
  const { threadId } = useParams();
  const { data, mutate, error } = useSWR(
    threadId ? URL.COMMENT(threadId) : null,
    fetcher
  );
  const { categoryThreads } = useCategoryThreads();
  const threadPost =
    categoryThreads.find(thread => thread._id === threadId) ?? {};
  return {
    post: threadPost ?? {},
    comments: data ?? [],
    isLoading: !error && !data,
    mutate,
  };
}
