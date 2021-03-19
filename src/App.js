import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import {} from 'react-icons/ai';
import CategoryList from './components/categories/CategoryList';
import Header from './components/shared/Header';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box
        mx="auto"
        as="main"
        maxW={{ base: 'container.md', lg: 'container.lg' }}
        minH="100vh"
      >
        <CategoryList />
      </Box>
    </ChakraProvider>
  );
}

export default App;
