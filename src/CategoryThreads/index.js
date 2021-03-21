import { Box, Button, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import * as api from '../services/apiService.js';
import CategoryThreadsItem from './CategoryThreadsItem.js';
import CreateThreadModal from './CreateThreadModal';

export default function CategoryThreads() {
  const [threads, setThreads] = useState([]);
  const { categoryId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    api.fetchThreadsByCategory(categoryId).then(setThreads);
  }, [categoryId]);
  return (
    <Box>
      <Button onClick={onOpen} variant="outline" size="sm">
        <Text as="span" mr="2">
          <FaPen />
        </Text>
        Ny tråd
      </Button>
      <CreateThreadModal isOpen={isOpen} onClose={onClose} />
      {threads.map(thread => (
        <Box my="5" key={thread._id}>
          <CategoryThreadsItem thread={thread} />
        </Box>
      ))}
    </Box>
  );
}
