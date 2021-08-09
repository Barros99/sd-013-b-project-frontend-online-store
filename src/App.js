import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ShoppingCart from './Pages/ShoppingCart';
import Initial from './Pages/Initial';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Initial } />
          <Route path="/cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
