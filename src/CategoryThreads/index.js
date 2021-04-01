import { Box } from '@chakra-ui/react';
import React from 'react';
import { useCategoryThreads } from '../hooks/useCategoryThreads';
import CategoryThreadsItem from './CategoryThreadsItem.js';
import CreateThreadModal from './CreateThreadModal';
export default function CategoryThreads() {
  const { categoryThreads } = useCategoryThreads();

  return (
    <Box>
      <CreateThreadModal />
      {categoryThreads.map(thread => (
        <Box my="5" key={thread._id}>
          <CategoryThreadsItem thread={thread} />
        </Box>
      ))}
    </Box>
  );
}
