import { Box, HStack, Link, Spacer, Text } from '@chakra-ui/layout';
import React from 'react';
import { IoLogoOctocat } from 'react-icons/io';
import { Link as RouteLink } from 'react-router-dom';
export default function Header() {
  return (
    <Box as="nav" shadow="sm">
      <HStack p="3" maxW="container.lg" mx="auto">
        <Box>
          <Link as={RouteLink} to="/" d="flex" alignItems="center">
            <IoLogoOctocat style={{ fontSize: '2rem' }} />
            <Text as="span" fontWeight="thin" fontSize="2xl" ml="2">
              Coolkatt
            </Text>
          </Link>
          <Text as="small" color="gray.500">
            En community för coola katter sedan 2021
          </Text>
        </Box>
        <Spacer />
        <Link>Home</Link>
        <Link>Threads</Link>
        <Link>Categories</Link>
      </HStack>
      {/* <Box bg="gray.300" p="1">
        <HStack maxW="container.lg" mx="auto">
          <Text w="96" isTruncated>
            Senaste inlägget: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Expedita minima distinctio maxime alias, explicabo voluptas
            fuga illum ex natus labore modi.
          </Text>
        </HStack>
      </Box> */}
    </Box>
  );
}
