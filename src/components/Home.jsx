import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../images/shopping-cart-svgrepo-com.svg';
import Search from './Search';
import ProductCard from './ProductCard';
import * as api from '../services/api';
import NotFound from './NotFound';

import '../styles/home.css';
import ProductList from './ProducList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      productsList: [],
      haveProduct: false,
    };
    this.searchText = this.searchText.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  async onClick() {
    const { inputText } = this.state;
    const id = 'MLB1196';
    const getListodProducts = await api.getProductsFromCategoryAndQuery(id, inputText);
    console.log(getListodProducts);
    if (getListodProducts.results !== null) {
      this.setState({
        productsList: getListodProducts.results,
        haveProduct: true,
      });
    } else {
      return <NotFound />;
    }
  }

  searchText(event) {
    const { target } = event;
    this.setState({
      inputText: target.value,
    });
  }

  render() {
    const { productsList, haveProduct } = this.state;
    return (
      <div className="main-div">

        <Search
          clasName="search-bar"
          searchText={ this.searchText }
          onClick={ this.onClick }
        />

        {haveProduct ? (
          <div className="product-card">
            { productsList.map((product) => (
              <ProductCard
                className="card"
                key={ product.id }
                product={ product }
              />
            ))}
          </div>
        ) : (
          <div clasName="text-main-page" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </div>
        )}

        <ProductList />

        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ shoppingCart } alt="cart icon" width="50" height="50" />
        </Link>
      </div>
    );
  }
}

export default Home;
