import { List } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import {
  BsArchiveFill,
  BsChatDotsFill,
  BsExclamationCircle,
} from 'react-icons/bs';
import CategoryListItem from './CategoryListItem';

const categories = [
  {
    icon: <BsExclamationCircle />,
    iconColor: 'red.500',
    title: 'Announcements',
    description: 'Check here for announcements about this forum',
    threadCount: 12,
  },
  {
    icon: <BsChatDotsFill />,
    iconColor: 'blue.500',
    title: 'General Discussion',
    description: 'A place to talk about whatever you want',
    threadCount: 58,
  },
  {
    icon: <BsArchiveFill />,
    iconColor: 'green.500',
    title: 'Technical Support',
    description: 'Need help with installing or configuring NodeBB? Look here.',
    threadCount: 9,
  },
  {
    icon: 'A',
    iconColor: 'red.500',
    title: 'Announcements',
    description: 'Check here for announcements about this forum',
    threadCount: 25,
  },
  {
    icon: 'G',
    iconColor: 'blue.500',
    title: 'General Discussion',
    description: 'A place to talk about whatever you want',
    threadCount: 8,
  },
  {
    icon: 'T',
    iconColor: 'green.500',
    title: 'Technical Support',
    description: 'Need help with installing or configuring NodeBB? Look here.',
    threadCount: 9,
  },
];

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('./mock_categories.json')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  // useEffect(() => {
  //   fetch('https://forum-api-jkrop.ondigitalocean.app/sandbox/TestAPI/category')
  //     .then(res => res.json())
  //     .then(data => setCategories(data));
  // }, []);

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
