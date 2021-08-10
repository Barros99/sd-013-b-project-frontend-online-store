import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getProductsFromCategoryAndQuery } from '../services/api';

import BarSearch from './BarSearch';
import Category from './Category';
import ProductList from './ProductList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categorySelect: undefined,
    };
    this.getProducts = this.getProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick({ target }) {
    const response = await getProductsFromCategoryAndQuery(
      target.id,
      null,
      true,
    );

    const items = await response.json();

    this.setState({
      categorySelect: target.id,
      products: items,
    });
  }

  async getProducts(searchText) {
    const { categorySelect } = this.state;
    const response = await getProductsFromCategoryAndQuery(
      categorySelect,
      searchText,
    );

    const items = await response.json();

    this.setState({ products: items });
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <header>
          <BarSearch getProducts={ this.getProducts } />
          <Link data-testid="shopping-cart-button" to="cart/">
            Cart
          </Link>
        </header>
        <main>
          <Category handleClick={ this.handleClick } />
          <ProductList products={ products } />
        </main>
      </>
    );
  }
}

export default Home;
