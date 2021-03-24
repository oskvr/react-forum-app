import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  clearCategoryThreads,
  fetchThreadsByCategoryId,
} from '../redux/threads.js';
import CategoryThreadsItem from './CategoryThreadsItem.js';
import CreateThreadModal from './CreateThreadModal';
export default function CategoryThreads() {
  const dispatch = useDispatch();
  const { categoryThreads } = useSelector(state => state.threads);
  const { categoryId } = useParams();
  useEffect(() => {
    dispatch(fetchThreadsByCategoryId(categoryId));

    // Avoid showing stale data
    return () => dispatch(clearCategoryThreads());
  }, [categoryId, dispatch]);
  if (!categoryThreads.data) return null;
  return (
    <Box>
      <CreateThreadModal />
      {categoryThreads.data.map(thread => (
        <Box my="5" key={thread._id}>
          <CategoryThreadsItem thread={thread} />
        </Box>
      ))}
    </Box>
  );
}
