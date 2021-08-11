import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import * as api from './services/api';
import Home from './components/initial/Home';
import ShoppingCart from './components/initial/ShoppingCart';

api.getCategories();
api.getProductsFromCategoryAndQuery('veiculo', 'monza');
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/shop" component={ ShoppingCart } />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
