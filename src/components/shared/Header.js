import { Box, Heading, HStack, Link, Spacer, Text } from '@chakra-ui/layout';
import React from 'react';
import { BsChat } from 'react-icons/bs';

export default function Header() {
  return (
    <Box as="nav" shadow="sm">
      <HStack p="3" maxW="container.lg" mx="auto">
        <BsChat style={{ fontSize: '2rem' }} />
        <Heading fontWeight="thin" fontSize="2xl">
          MyForum
        </Heading>
        <Spacer />
        <Link>Home</Link>
        <Link>Threads</Link>
        <Link>Categories</Link>
      </HStack>
      <Box bg="gray.300" p="1">
        <HStack maxW="container.lg" mx="auto">
          <Text w="96" isTruncated>
            Senaste inlägget: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Expedita minima distinctio maxime alias, explicabo voluptas
            fuga illum ex natus labore modi.
          </Text>
        </HStack>
      </Box>
    </Box>
  );
}
