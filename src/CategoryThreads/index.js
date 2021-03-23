import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearThreads, fetchThreads } from '../redux/threads.js';
import CategoryThreadsItem from './CategoryThreadsItem.js';
import CreateThreadModal from './CreateThreadModal';
export default function CategoryThreads() {
  const dispatch = useDispatch();
  const { threads } = useSelector(state => state.threads);
  const { categoryId } = useParams();
  useEffect(() => {
    dispatch(fetchThreads(categoryId));

    // Avoid showing stale data
    return () => dispatch(clearThreads());
  }, [categoryId, dispatch]);
  if (!threads) return null;
  return (
    <Box>
      <CreateThreadModal />
      {threads.map(thread => (
        <Box my="5" key={thread._id}>
          <CategoryThreadsItem thread={thread} />
        </Box>
      ))}
    </Box>
  );
}
