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

export default function CategoryListItem({
  icon,
  iconColor,
  title,
  description,
  threadCount,
}) {
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
          bg={iconColor}
        >
          <Box fontSize="2xl" color="white" userSelect="none">
            {icon}
          </Box>
        </Flex>
        <Box>
          <Link href="#" color="blue.500">
            <Heading size="md" mb="1">
              {title}
            </Heading>
          </Link>
          <Text color="gray.600" fontSize="sm">
            {description}
          </Text>
        </Box>
        <Spacer />
        <HStack spacing="5">
          <VStack spacing="0">
            <Text as="span" fontSize="2xl">
              {threadCount}
            </Text>
            <Text as="small" color="gray.500">
              {threadCount === 1 ? 'Tråd' : 'Trådar'}
            </Text>
          </VStack>
          <Box h="14" w="1" bg={iconColor}></Box>
        </HStack>
      </HStack>
    </Box>
  );
}
