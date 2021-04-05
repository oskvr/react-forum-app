import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import URL from '../api/apiEndpointConstants';
import fetcher from '../utils/fetcher';
import { sortBy } from '../utils/sort';

export function useCategoryThreads() {
  const { categoryId } = useParams();
  const { data, mutate, error } = useSWR(
    categoryId ? URL.THREADS(categoryId) : null,
    fetcher
  );
  const { sortOptions } = useSelector(state => state.sorting);
  const [sorted, setSorted] = useState([]);
  useEffect(() => {
    if (data) {
      const sorted = sortBy(data, sortOptions.target, sortOptions.order);
      setSorted([...sorted]);
    }
  }, [data, sortOptions]);
  return {
    categoryThreads: sorted ?? [],
    mutate,
    isLoading: !data && !error,
    error,
  };
}
