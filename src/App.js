import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import {} from 'react-icons/ai';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CategoryList from './components/categories/CategoryList';
import Breadcrumbs from './components/shared/Breadcrumbs';
import Header from './components/shared/Header';
import Thread from './pages/Thread';
import ThreadsList from './components/threads/ThreadsList';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <Box
          mx="auto"
          as="main"
          maxW={{ base: 'container.md', lg: 'container.lg' }}
          minH="100vh"
        >
          <Breadcrumbs />
          <Switch>
            <Route exact path="/">
              <CategoryList />
            </Route>
            <Route path="/category/:categoryId">
              <ThreadsList />
            </Route>
            <Route path="/thread/:threadId">
              <Thread />
            </Route>
          </Switch>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
