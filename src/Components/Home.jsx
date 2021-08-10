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
      categorySelect: undefined,
      card: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addToCard = this.addToCard.bind(this);
  }

  async handleClick({ target }) {
    const response = await getProductsFromCategoryAndQuery(
      target.id,
      null,
      true,
    );

    const { results } = await response;

    this.setState({
      categorySelect: target.id,
      products: results,
    });
  }

  async getProducts(searchText) {
    const { categorySelect } = this.state;
    const items = await getProductsFromCategoryAndQuery(categorySelect, searchText)
      .then((result) => result.results);
    this.setState({ products: items });
  }

  async addToCard({ title, price, thumbnail, id }) {
    const { getCardItem } = this.props;
    const newItem = { title, price, thumbnail, id };
    this.setState((prevState) => ({ card: [...prevState.card, newItem] }), () => {
      const { card: newCard } = this.state;
      getCardItem(newCard);
    });
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
          <Category handleClick={ this.handleClick } />
          <ProductList products={ products } addToCard={ this.addToCard } />
        </main>
      </>
    );
  }
}

export default Home;

Home.propTypes = {
  getCardItem: PropTypes.func.isRequired,
};
