import { useEffect, useState } from 'react';
import URL from '../api/apiEndpointConstants';

export function useCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    console.log('fetching categories');
    fetch(URL.CATEGORIES)
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return { categories };
}
