import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import ShoppingCartLink from './components/Home';

class App extends React.Component {
  render() {
    return (
      <main>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/shopping-cart" component={ ShoppingCart } />
            </Switch>
            <ShoppingCartLink />
          </BrowserRouter>
        </div>

        <div>
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma
            categoria.
          </h3>
        </div>
      </main>
    );
  }
}

export default App;
