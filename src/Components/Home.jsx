import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getProductsFromCategoryAndQuery } from '../services/api';

import BarSearch from './BarSearch';
import Category from './Category';
import ProductList from './ProductList';

// piru de conflito 2
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
    const items = await getProductsFromCategoryAndQuery(
      target.id,
      null,
      true,
    ).then((result) => result.results);

    console.log(items);
    this.setState({
      categorySelect: target.id,
      products: items,
    });
  }

  async getProducts(searchText) {
    const { categorySelect } = this.state;
    const items = await getProductsFromCategoryAndQuery(
      categorySelect,
      searchText,
    ).then((result) => result.results);

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
