import { List } from '@chakra-ui/react';
import React from 'react';
import { useCategories } from '../hooks/useCategories';
import CategoryListItem from './CategoryListItem';

export default function Categories() {
  const { categories } = useCategories();

  return (
    <List>
      {categories?.map(category => (
        <CategoryListItem key={category._id} category={category} my="8" />
      ))}
    </List>
  );
}
