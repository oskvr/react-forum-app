import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useSWR from 'swr';
import URL from '../api/apiEndpointConstants';
import fetcher from '../utils/fetcher';

export function useCategories() {
  // const { data } = useSWR('./mock_categories.json', fetcher);
  const { data } = useSWR(URL.CATEGORIES, fetcher);
  const { categoryId } = useParams();
  const [parsedData, setParsedData] = useState([]);
  useEffect(() => {
    const parsed = data?.map(category => {
      const { title, description, color } = JSON.parse(category.name);
      const newCategory = {
        threads: category.threads,
        _id: category._id,
        title,
        description,
        color: color === 'black' ? 'black' : `${color}.500`,
        __v: category.__v,
      };
      return newCategory;
    });
    setParsedData(parsed);
  }, [data]);
  let current = categoryId
    ? parsedData?.find(category => category._id === categoryId)
    : {};

  if (!current) current = {};
  return { current, categories: parsedData ?? [] };
}
