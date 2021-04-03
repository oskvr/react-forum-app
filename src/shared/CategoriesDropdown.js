import {
  ChevronDownIcon,
  ChevronUpIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  IconButton,
  Link,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { useCategories } from '../hooks/useCategories';
export default function CategoriesDropdown() {
  const { categories } = useCategories();
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            aria-label="Kategorier"
            size="sm"
            variant="outlined"
          >
            Kategorier
          </MenuButton>
          <MenuList>
            {categories.map(category => (
              <LinkBox as={MenuItem}>
                <Box
                  h="2"
                  w="2"
                  rounded="full"
                  bg={`${category.color}.500`}
                  mr="2"
                />
                <LinkOverlay as={RouteLink} to={`/category/${category._id}`}>
                  {category.title}
                </LinkOverlay>
              </LinkBox>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
}
