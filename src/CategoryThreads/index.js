import { Box, Spacer, Stack } from '@chakra-ui/react';
import React from 'react';
import { useCategoryThreads } from '../hooks/useCategoryThreads';
import CategoryThreadsItem from './CategoryThreadsItem.js';
import CreateThreadModal from './CreateThreadModal';
import SortOptions from './SortOptions';

export default function CategoryThreads() {
  const { categoryThreads } = useCategoryThreads();

  return (
    <Box>
      <Stack direction={{ base: 'column', sm: 'row' }} py="4" align="start">
        <CreateThreadModal />
        <Spacer />
        <SortOptions />
      </Stack>
      {categoryThreads.map(thread => (
        <Box my="5" key={thread._id}>
          <CategoryThreadsItem thread={thread} />
        </Box>
      ))}
    </Box>
  );
}
