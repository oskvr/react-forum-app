import { List } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useCategories } from '../hooks/useCategories';
import CategoryListItem from './CategoryListItem';

export default function Categories() {
  const { categories } = useCategories();
  useEffect(() => {
    document.title = 'Coolkatt';
  }, []);
  return (
    <List>
      {categories?.map(category => (
        <CategoryListItem key={category._id} category={category} my="8" />
      ))}
    </List>
  );
}
