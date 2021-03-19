import {
  Box,
  Flex,
  HStack,
  Link,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/layout';
import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
export default function CategoryListItem({ category }) {
  return (
    <Box my="5">
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
          bg={'purple.500'}
        >
          <Box fontSize="2xl" color="white" userSelect="none">
            T
          </Box>
        </Flex>
        <Box w="100%">
          <Link
            as={RouteLink}
            to={`/category/${category._id}`}
            color="blue.500"
            fontSize="xl"
            fontWeight="bold"
          >
            {category.name}
          </Link>
          <Text color="gray.600" fontSize="sm" w="50%">
            En beskrivning för den här kategorin
          </Text>
        </Box>
        <Spacer />
        <HStack spacing="5">
          <VStack spacing="0">
            <Text as="span" fontSize="2xl">
              {category.threads.length}
            </Text>
            <Text as="small" color="gray.500">
              {category.threads.length === 1 ? 'Tråd' : 'Trådar'}
            </Text>
          </VStack>
          <Box h="14" w="1" bg="red.500"></Box>
        </HStack>
      </HStack>
    </Box>
  );
}
