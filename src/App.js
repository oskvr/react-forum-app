import {
  Box,
  ChakraProvider,
  Container,
  Progress,
  theme,
} from '@chakra-ui/react';
import React from 'react';
import {} from 'react-icons/ai';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './Categories';
import CategoryThreads from './CategoryThreads';
import Breadcrumbs from './shared/Breadcrumbs';
import { DarkModeSwitch } from './shared/DarkModeSwitch';
import Header from './shared/Header';
import Thread from './Thread';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box>
          <Header />
          <DarkModeSwitch />
          <Progress isIndeterminate hidden={true} size="xs" />
          <Container
            as="main"
            mx="auto"
            maxW={{ base: 'container.md', lg: 'container.lg' }}
            minH="80vh"
          >
            <Breadcrumbs my="8" />
            <Switch>
              <Route exact path="/">
                <Categories />
              </Route>
              <Route exact path="/category/:categoryId">
                <CategoryThreads />
              </Route>
              <Route exact path="/category/:categoryId/thread/:threadId">
                <Thread />
              </Route>
            </Switch>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
