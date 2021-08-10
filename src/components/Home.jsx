import React from 'react';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';

import CartButton from './CartButton';
import Search from './Search';
import ProductCard from './ProductCard';
import CategoriesList from './CategoriesList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: '',
      showCard: false,
    };

    this.handleCategoriesList = this.handleCategoriesList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    this.setState({ search: target.value });
  }

  async handleCategoriesList({ target }) {
    const { results } = await getProductsFromCategoryAndQuery(target.value, '');
    this.setState({
      results,
      showCard: true,
    });
  }

  async handleClick() {
    const { search } = this.state;
    const { results } = await getProductsFromCategoryAndQuery('', search);
    this.setState({
      results,
      showCard: true,
    });
  }

  render() {
    const { addToCart } = this.props;
    const { results, showCard } = this.state;
    return (
      <div>
        <Search onClick={ this.handleClick } onChange={ this.handleChange } />
        <CartButton />
        { (showCard && <ProductCard results={ results } addToCart={ addToCart } />) }
        <CategoriesList onClick={ this.handleCategoriesList } />
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Home;
