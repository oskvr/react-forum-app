import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './Categories';
import CategoryThreads from './CategoryThreads';
import Layout from './shared/Layout';
import NotFound from './shared/NotFound';
import Thread from './Thread';
const routes = [
  { path: '/', component: <Categories /> },
  { path: '/category/:categoryId', component: <CategoryThreads /> },
  { path: '/category/:categoryId/thread/:threadId', component: <Thread /> },
  { path: '', component: <NotFound /> },
];
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          {routes.map(route => (
            <Route exact path={route.path} key={route.path}>
              <Layout>{route.component}</Layout>
            </Route>
          ))}
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
export default App;
