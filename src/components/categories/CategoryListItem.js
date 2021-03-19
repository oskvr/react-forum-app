import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/layout';
import React from 'react';

export default function CategoryListItem({ category }) {
  return (
    <Box>
      <HStack p="5">
        <Flex
          align="center"
          justify="center"
          rounded="full"
          w="14"
          h="14"
          p="4"
          mr="3"
          bg={'red.500'}
        >
          <Box fontSize="2xl" color="white" userSelect="none">
            T
          </Box>
        </Flex>
        <Box>
          <Link href="#" color="blue.500">
            <Heading size="md" mb="1">
              {category.name}
            </Heading>
          </Link>
          <Text color="gray.600" fontSize="sm" w="70%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            reiciendis in velit repudiandae beatae dolor quas optio labore quod
            fugit.
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
