import { List } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import CategoryListItem from './CategoryListItem';
// import { useDispatch, useSelector } from 'react-redux';
// import { loadCategories } from './redux/categories';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('https://forum-api-jkrop.ondigitalocean.app/sandbox/TestAPI/category')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   fetch('https://forum-api-jkrop.ondigitalocean.app/sandbox/TestAPI/category')
  //     .then(res => res.json())
  //     .then(data => dispatch(loadCategories(data)));
  // }, [dispatch]);
  // const { categories } = useSelector(state => state.categories);
  return (
    <List>
      {categories.map(category => (
        <CategoryListItem key={category._id} category={category} />
      ))}
    </List>
  );
}

/* <CategoryListItem
          icon={category.icon}
          iconColor={category.iconColor}
          title={category.name}
          description={category.description}
          threadCount={category.threadCount}
        /> */
