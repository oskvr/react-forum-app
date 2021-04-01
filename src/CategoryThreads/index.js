import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCategories } from '../hooks/useCategories';
import { useCategoryThreads } from '../hooks/useCategoryThreads';
import CategoryThreadsItem from './CategoryThreadsItem.js';
import CreateThreadModal from './CreateThreadModal';
export default function CategoryThreads() {
  const { categoryThreads } = useCategoryThreads();
  const { current } = useCategories();
  return (
    <Box>
      <Heading fontWeight="thin" mb="10">
        {current.title}
      </Heading>
      <CreateThreadModal />
      {categoryThreads.map(thread => (
        <Box my="5" key={thread._id}>
          <CategoryThreadsItem thread={thread} />
        </Box>
      ))}
    </Box>
  );
}
