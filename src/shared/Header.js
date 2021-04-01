import { Box, HStack, Link, Spacer, Text } from '@chakra-ui/layout';
import { Tab, TabList, Tabs } from '@chakra-ui/tabs';
import React, { useEffect, useState } from 'react';
import { IoLogoOctocat } from 'react-icons/io';
import { Link as RouteLink, useParams } from 'react-router-dom';
import { useCategories } from '../hooks/useCategories';
export default function Header() {
  const { categories } = useCategories();
  const { categoryId } = useParams();
  const [tabIndex, setTabIndex] = useState(-12);

  useEffect(() => {
    if (!categoryId) {
      console.log('Hej');
      setTabIndex(-12);
    }
  }, [categoryId]);
  return (
    <Box as="nav" mb="10">
      <Box shadow="sm">
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
            {/* <Text as="small" color="gray.500">
              En community för coola katter
            </Text> */}
          </Box>
          <Spacer />
        </HStack>
      </Box>
      <Box>
        <HStack maxW="container.lg" mx="auto">
          <Tabs tabIndex={tabIndex} variant="enclosed" spacing="5" size="sm">
            <TabList>
              {categories.map(category => (
                <Tab
                  as={RouteLink}
                  to={`/category/${category._id}`}
                  _focus={{ outline: 'none' }}
                >
                  {category.title}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </HStack>
      </Box>
    </Box>
  );
}
