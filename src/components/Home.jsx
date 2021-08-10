import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../images/shopping-cart-svgrepo-com.svg';
import Search from './Search';
import ProductCard from './ProductCard';
import ProductList from './ProducList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-div">
        <ProductList />
        <Search />
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <ProductCard />
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ shoppingCart } alt="cart icon" width="50" height="50" />
        </Link>
      </div>
    );
  }
}

export default Home;
