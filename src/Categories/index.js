import { List, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/categories';
import CategoryListItem from './CategoryListItem';

export default function Categories() {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  // if (!categories.length) return null;
  return (
    <List>
      {categories.map(category => (
        <CategoryListItem key={category._id} category={category} />
      ))}
    </List>
  );
}
