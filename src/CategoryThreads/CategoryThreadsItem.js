import { Box, Flex, HStack, Link, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { FaCommentAlt, FaThumbsUp } from 'react-icons/fa';
import { Link as RouteLink } from 'react-router-dom';

export default function CategoryThreadsItem({ thread }) {
  return (
    <HStack>
      <Flex
        align="center"
        justify="center"
        rounded="full"
        shrink="0"
        w="14"
        h="14"
        p="4"
        mr="3"
        bg={'blue.500'}
      >
        <Box fontSize="2xl" color="white" userSelect="none">
          T
        </Box>
      </Flex>
      <Box w="100%">
        <Link
          as={RouteLink}
          to={`/thread/${thread._id}`}
          color="blue.500"
          fontSize="xl"
          fontWeight="bold"
        >
          {thread.title}
        </Link>
        <Text color="gray.600" fontSize="sm" w="50%">
          {new Date(thread.createdAt).toDateString()}
        </Text>
      </Box>
      <Spacer />
      <HStack spacing="5">
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
        <Box h="14" w="1" bg="blue.500"></Box>
      </HStack>
    </HStack>
  );
}
