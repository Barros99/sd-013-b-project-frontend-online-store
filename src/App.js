import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ShoppingCart from './Pages/ShoppingCart';
import Initial from './Pages/Initial';
import ProductDetail from './Pages/ProductDetail';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: {},
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(product) {
    const { products } = this.state;
    if (products[product.id]) {
      products[product.id].quantity += 1;
    } else {
      products[product.id] = product;
    }
    this.setState({
      products,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={ () => <Initial handleChangeOnCart={ this.handleChange } /> }
            />
            <Route
              path="/cart"
              component={ () => <ShoppingCart products={ products } /> }
            />
            <Route
              path="/product-detail/:id"
              render={ (props) => (
                <ProductDetail
                  { ...props }
                  handleChange={ this.handleChange }
                />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
