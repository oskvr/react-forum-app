import {
  Box,
  ChakraProvider,
  Container,
  Progress,
  theme,
} from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './Categories';
import CategoryThreads from './CategoryThreads';
import Layout from './shared/Layout';
import Breadcrumbs from './shared/Breadcrumbs';
import { DarkModeSwitch } from './shared/DarkModeSwitch';
import Header from './shared/Header';
import Thread from './Thread';
//TODO: Fixa breadcrumbs. Kan nog använda Redux för att hålla reda på nuvarande kategori och tråd.
//TODO: Breadcrumbs gör så att SWR fetchar undefined.
//TODO: Fixa så att ett ogiltigt id i URL:en genererar en felsida
//TODO: KANSKE - sorteringsfunktion på kommentarer och trådar
//TODO: KANSKE - 'cards' på förstasidan (över kategorierna) som visar typ "antal skapade kommentarer/trådar idag"
//TODO: KANSKE - "citera"-funktion. Använd redux för att dela den citerade kommentaren mellan de olika komponenterna.

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout>
              <Categories />
            </Layout>
          </Route>
          <Route exact path="/category/:categoryId">
            <Layout>
              <CategoryThreads />
            </Layout>
          </Route>
          <Route exact path="/category/:categoryId/thread/:threadId">
            <Layout>
              <Thread />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
