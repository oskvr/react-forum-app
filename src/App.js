import { ChakraProvider, theme } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './Categories';
import CategoryThreads from './CategoryThreads';
import Layout from './shared/Layout';
import Thread from './Thread';
const routes = [
  { path: '/', component: <Categories /> },
  { path: '/category/:categoryId', component: <CategoryThreads /> },
  { path: '/category/:categoryId/thread/:threadId', component: <Thread /> },
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

// Fixa breadcrumbs. Kan nog använda Redux för att hålla reda på nuvarande kategori och tråd. (FIXED)
// Breadcrumbs gör så att SWR fetchar undefined. (FIXED)
// Använd <Avatar/> istället för runda ikoner. Mycket bättre: https://chakra-ui.com/docs/media-and-icons/avatar (FIXED)
//TODO: https://forums.meteor.com/t/blaze-opencollective-ownership/55449 lite UI-inspo
//TODO: Mappa färger till de olika kategorierna och visa färgerna i kategori-ikonerna, samt vid hover över kategorierna i headern
//TODO: Sätt max length för diverse user input. En titel ska inte kunna vara mer än n karaktärer.
//TODO: Redux kan användas för att hålla koll på sortering
//TODO: Breadcrumbs ska truncateas vid en viss längd.
//TODO: Fixa så att ett ogiltigt id i URL:en genererar en felsida
//TODO: KANSKE - sorteringsfunktion på kommentarer och trådar
//TODO: KANSKE - 'cards' på förstasidan (över kategorierna) som visar typ "antal skapade kommentarer/trådar idag"
//TODO: KANSKE - "citera"-funktion. Använd redux för att dela den citerade kommentaren mellan de olika komponenterna.
//TODO: KaNSKE - pagination i trådar
