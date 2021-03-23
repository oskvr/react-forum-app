import {
  Box,
  ChakraProvider,
  Container,
  Progress,
  theme,
} from '@chakra-ui/react';
import React from 'react';
import {} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './Categories';
import CategoryThreads from './CategoryThreads';
import Breadcrumbs from './shared/Breadcrumbs';
import { DarkModeSwitch } from './shared/DarkModeSwitch';
import Header from './shared/Header';
import Thread from './Thread';
//TODO: Fixa breadcrumbs. Kan nog använda Redux för att hålla reda på nuvarande kategori och tråd.
//TODO: Fixa så att ett ogiltigt id i URL:en genererar en felsida
//TODO: KANSKE - sorteringsfunktion på kommentarer och trådar
//TODO: KANSKE - 'cards' på förstasidan (över kategorierna) som visar typ "antal skapade kommentarer/trådar idag"
//TODO: KANSKE - "citera"-funktion. Använd redux för att dela den citerade kommentaren mellan de olika komponenterna.

function ThreadsCounter() {
  const { threads } = useSelector(state => state.threads);
  return <h1>Thread count: {threads.length}</h1>;
}
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box>
          <Header />
          <ThreadsCounter />
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
