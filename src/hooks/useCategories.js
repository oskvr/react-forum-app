import { useEffect, useState } from 'react';
import URL from '../utils/apiEndpointConstants';
export default function useCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(URL.CATEGORIES)
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return { categories };
}
