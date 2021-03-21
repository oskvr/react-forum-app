import { Box, HStack, Link, Spacer, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaCommentAlt, FaThumbsUp } from 'react-icons/fa';
import { IoMdChatbubbles } from 'react-icons/io';
import { Link as RouteLink, useParams } from 'react-router-dom';
import { getFormattedDate } from '../utils/getFormattedDate';

export default function CategoryThreadsItem({ thread }) {
  const date = getFormattedDate(thread.createdAt);
  const { categoryId } = useParams();

  return (
    <HStack>
      <Box
        alignSelf="start"
        rounded="full"
        bg="blue.500"
        p="3"
        fontSize="4xl"
        color="white"
        mr="3"
      >
        <IoMdChatbubbles />
      </Box>
      <VStack align="start" spacing="2" maxW="70%">
        <Link
          as={RouteLink}
          to={`/category/${categoryId}/thread/${thread._id}`}
          color="blue.500"
          fontSize="xl"
          fontWeight="bold"
        >
          {thread.title}
        </Link>
        <Text noOfLines={2} opacity="0.7">
          {thread.content}
        </Text>
        <Text fontSize="sm" opacity="0.9">
          Skapad: {date}
        </Text>
      </VStack>
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
