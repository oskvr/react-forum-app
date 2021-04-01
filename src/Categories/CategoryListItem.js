import {
  Avatar,
  Box,
  HStack,
  Link,
  ListItem,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { IoMdTrash } from 'react-icons/io';
import { Link as RouteLink } from 'react-router-dom';
export default function CategoryListItem({ category, ...props }) {
  // const { title, description, color } = JSON.parse(category.name);
  const bgColor = `${category.color}.500`;
  return (
    <ListItem {...props}>
      <HStack>
        {/* <Flex
          align="center"
          justify="center"
          rounded="full"
          shrink="0"
          w="14"
          h="14"
          p="4"
          mr="3"
          bg={bgColor}
        >
          <Box fontSize="2xl" color="white" userSelect="none">
            {category.name.substring(0, 1).toUpperCase()}
          </Box>
        </Flex> */}
        <Avatar
          bg={bgColor}
          color="white"
          // icon={<IoMdTrash style={{ fontSize: '1.5rem' }} />}
          name={category.title}
        />
        <Box w="100%">
          <Link
            as={RouteLink}
            to={`/category/${category._id}`}
            color="blue.500"
            fontSize="xl"
            fontWeight="bold"
          >
            {category.title}
          </Link>
          <Text opacity="0.7" fontSize="sm" w="50%">
            {category.description}
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
          <Box h="14" w="1" bg={bgColor}></Box>
        </HStack>
      </HStack>
    </ListItem>
  );
}
