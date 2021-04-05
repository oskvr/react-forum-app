import { Box, Flex, Spacer, Spinner, Stack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useCategories } from '../hooks/useCategories';
import { useCategoryThreads } from '../hooks/useCategoryThreads';
import NotFound from '../shared/NotFound';
import CategoryThreadsItem from './CategoryThreadsItem.js';
import CreateThreadModal from './CreateThreadModal';
import SortOptions from './SortOptions';

export default function CategoryThreads() {
  const { categoryThreads, isLoading } = useCategoryThreads();
  const { current } = useCategories();

  useEffect(() => {
    document.title = current.title;
  }, [current]);
  if (isLoading) {
    return (
      <Flex justify="center" mt="52">
        <Spinner />
      </Flex>
    );
  }
  if (categoryThreads.length > 0) {
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
  } else {
    return <NotFound />;
  }
}
