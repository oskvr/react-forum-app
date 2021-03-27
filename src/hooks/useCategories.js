import useSWR from 'swr';
import URL from '../api/apiEndpointConstants';
import fetcher from '../utils/fetcher';

export function useCategories() {
  const { data } = useSWR(URL.CATEGORIES, fetcher);
  return { categories: data ?? [] };
}
