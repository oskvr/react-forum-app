import { Box, ChakraProvider, Progress, theme } from '@chakra-ui/react';
import React from 'react';
import {} from 'react-icons/ai';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './Categories';
import CategoryThreads from './CategoryThreads';
import Breadcrumbs from './shared/Breadcrumbs';
import Header from './shared/Header';
import Thread from './Thread';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box>
          <Header />
          <Progress isIndeterminate hidden={true} size="xs" />
          <Box
            as="main"
            mx="auto"
            maxW={{ base: 'container.md', lg: 'container.lg' }}
            minH="100vh"
          >
            <Breadcrumbs my="8" />
            <Switch>
              <Route exact path="/">
                <Categories />
              </Route>
              <Route path="/category/:categoryId">
                <CategoryThreads />
              </Route>
              <Route path="/thread/:threadId">
                <Thread />
              </Route>
            </Switch>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
