import { Box, HStack, Link, Spacer, Text } from '@chakra-ui/layout';
import React from 'react';
import { IoLogoOctocat } from 'react-icons/io';
import { Link as RouteLink } from 'react-router-dom';
export default function Header() {
  return (
    <Box as="nav" shadow="sm">
      <HStack p="3" maxW="container.lg" mx="auto">
        <Box>
          <Link
            as={RouteLink}
            _focus={{ boxShadow: 'none' }}
            _hover={{ textDecoration: 'none' }}
            to="/"
            d="flex"
            alignItems="center"
          >
            <IoLogoOctocat style={{ fontSize: '2rem' }} />
            <Text as="span" fontWeight="thin" fontSize="2xl" ml="2">
              Coolkatt
            </Text>
          </Link>
          <Text as="small" color="gray.500">
            En community för coola katter
          </Text>
        </Box>
        <Spacer />
      </HStack>
    </Box>
  );
}
