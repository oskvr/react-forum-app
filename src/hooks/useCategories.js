import { useEffect, useState } from 'react';
import { FaAccusoft } from 'react-icons/fa';
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
      let newCategory = {};
      if (category.name === 'Testkategori' || category.name === 'Allmänt') {
        newCategory = {
          threads: category.threads,
          _id: category._id,
          title: category.name,
          description: 'Okänd',
          icon: <FaAccusoft />,
          color: 'gray',
          __v: category.__v,
        };
      } else {
        const { title, description, color, icon } = JSON.parse(category.name);
        newCategory = {
          threads: category.threads,
          _id: category._id,
          title,
          description,
          icon,
          color,
          __v: category.__v,
        };
      }
      return newCategory;
    });
    setParsedData(parsed);
  }, [data]);
  let current = categoryId
    ? parsedData?.find(category => category._id === categoryId)
    : {};

  //TODO: if categoryId exists but is not valid it throws an exception now.
  // Temporary if fix - should return error message instead
  if (!current) current = {};
  return { current, categories: parsedData ?? [] };
}
