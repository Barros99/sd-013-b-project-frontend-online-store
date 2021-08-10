import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <main>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/shopping-cart" component={ ShoppingCart } />
            </Switch>
          </BrowserRouter>
        </div>
      </main>
    );
  }
}

export default App;
