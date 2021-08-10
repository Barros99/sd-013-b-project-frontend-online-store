import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      card: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidUpdate(_, prevState) {
    const { card } = this.state;
    const { getItemCard } = this.props;
    if (card.length !== prevState.card.length) { getItemCard(card); }
  }

  async getProducts(searchText) {
    const items = await getProductsFromCategoryAndQuery(undefined, searchText)
      .then((result) => result.results);
    this.setState({ products: items });
  }

  addToCart({ target }) {
    const { card } = this.state;
    const title = target.parentElement.querySelector('.title-product').innerText;
    const price = target.parentElement.querySelector('.price-product').innerText;
    const image = target.parentElement.querySelector('.image-product').src;
    const obj = { title, price, image, quantidade: 1 };
    if (card.some((objc) => objc.title === title)) { return null; }
    this.setState((prevState) => ({
      card: [...prevState.card, obj],
    }));
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <header>
          <BarSearch getProducts={ this.getProducts } />
          <Link data-testid="shopping-cart-button" to="cart/">Cart</Link>
        </header>
        <main>
          <Category />
          <ProductList products={ products } addToCart={ this.addToCart } />
        </main>
      </>
    );
  }
}

export default Home;

Home.propTypes = {
  getItemCard: PropTypes.func.isRequired,
};
