import React from 'react';
import Search from './Search';
import logo from '../images/shopping-cart-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-div">
        <Search />
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <ProductCard />
        <Link to="/cart"> <img src={logo} alt="cart icon" width="50" height="50" /> </Link>
      </div>
    );
  }
}

export default Home;
