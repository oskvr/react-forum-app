import {
  Avatar,
  Box,
  HStack,
  Link,
  Spacer,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaCommentAlt, FaThumbsUp } from 'react-icons/fa';
import { IoMdChatbubbles } from 'react-icons/io';
import { Link as RouteLink, useParams } from 'react-router-dom';
import { useCategories } from '../hooks/useCategories';
import { getFormattedDate } from '../utils/getFormattedDate';

export default function CategoryThreadsItem({ thread }) {
  const dateCreated = getFormattedDate(thread.createdAt);
  const { categoryId } = useParams();
  const { current } = useCategories();
  return (
    <Stack direction={{ base: 'row', sm: 'row' }}>
      <HStack w={{ base: '100%', sm: '80%' }}>
        <Avatar
          icon={<IoMdChatbubbles />}
          bg={current.color}
          color="white"
          mr={{ base: '1', sm: '3' }}
          alignSelf="start"
          width={{ base: '2rem', sm: '3rem' }}
          height={{ base: '2rem', sm: '3rem' }}
        />
        <VStack align="start" spacing="2" maxW="90%">
          <Link
            as={RouteLink}
            to={`/category/${categoryId}/thread/${thread._id}`}
            color="blue.500"
            fontSize="xl"
            fontWeight="bold"
          >
            {thread.title}
          </Link>
          <Text noOfLines={2} opacity="0.7" w="80%">
            {thread.content}
          </Text>
          <HStack spacing="4">
            <Text fontSize="sm" opacity="0.9">
              Skapad: {dateCreated}
            </Text>
            <HStack display={{ base: 'flex', sm: 'none' }}>
              <HStack>
                <Text as="span" fontSize="xs">
                  {thread.comments.length}
                </Text>
                <FaCommentAlt style={{ width: '0.8rem' }} />
              </HStack>
              <HStack>
                <Text as="span" fontSize="xs">
                  {thread.likes.length}
                </Text>
                <FaThumbsUp style={{ width: '0.8rem' }} />
              </HStack>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
      <Spacer />
      <HStack spacing="5" display={{ base: 'none', sm: 'flex' }}>
        <HStack>
          <Text as="span" fontSize="xl">
            {thread.comments.length}
          </Text>
          <FaCommentAlt />
        </HStack>
        <HStack>
          <Text as="span" fontSize="xl">
            {thread.likes.length}
          </Text>
          <FaThumbsUp />
        </HStack>
        <Box h="14" w="1" bg={current.color}></Box>
      </HStack>
    </Stack>
  );
}
