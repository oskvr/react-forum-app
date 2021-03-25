import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import URL from '../api/apiEndpointConstants';
import fetcher from '../utils/fetcher';

export function useCategoryThreads() {
  const { categoryId } = useParams();
  const { data, mutate } = useSWR(URL.THREADS(categoryId), fetcher);
  return { categoryThreads: data ?? [], mutate };
}
