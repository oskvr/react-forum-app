import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import URL from '../api/apiEndpointConstants';
import fetcher from '../utils/fetcher';
import { sortBy } from '../utils/sort';

export function useCategoryThreads() {
  const { categoryId } = useParams();
  const { data, mutate } = useSWR(
    categoryId ? URL.THREADS(categoryId) : null,
    fetcher
  );
  return { categoryThreads: data ?? [], mutate };
}
