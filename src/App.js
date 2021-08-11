import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ProductList from './PageList/ProductList';
import Product from './PageList/Product';
import Cart from './PageList/Cart';

class App extends React.Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);

    this.state = {
      products: {},
    };
  }

  updateState(products) {
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Link to="/cart" data-testid="shopping-cart-button">
            <span role="img" aria-label="carrinho">🛒</span>
          </Link>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => <ProductList updateState={ this.updateState } /> }
            />
            <Route
              exact
              path="/product/:id"
              render={ (props) => <Product { ...props } products={ products } /> }
            />
            <Route exact path="/cart" component={ Cart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
