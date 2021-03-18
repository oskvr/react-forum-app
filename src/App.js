import { ChakraProvider, Container, theme } from '@chakra-ui/react';
import React from 'react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container
        as="main"
        maxW={{ base: 'container.md', lg: 'container.lg' }}
        minH="100vh"
        bg="gray.100"
      >
        Hello world
      </Container>
    </ChakraProvider>
  );
}

export default App;
