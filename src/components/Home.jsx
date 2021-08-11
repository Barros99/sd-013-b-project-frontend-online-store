import React from 'react';
import { Link } from 'react-router-dom';

import Search from './Search';
import ProductCard from './ProductCard';
import * as api from '../services/api';
import NotFound from './NotFound';
import CategoryList from './CategoryList';

import shoppingCart from '../images/shopping-cart-svgrepo-com.svg';
import '../styles/home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      productsList: [],
      haveProduct: false,
    };
    this.searchText = this.searchText.bind(this);
    this.categorieSelected = this.categorieSelected.bind(this);
  }

  async onClick() {
    const { inputText } = this.state;
    const id = 'MLB1196';
    const getListodProducts = await api.getProductsFromCategoryAndQuery(id, inputText);
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

  categorieSelected(categorie) {
    console.log(categorie);
  }

  render() {
    const { productsList, haveProduct } = this.state;
    return (
      <div className="main-div">
        <div className="top-section">
          <Search
            clasName="search-bar"
            searchText={ this.searchText }
            onClick={ this.onClick }
          />
          <div>
            <Link
              className="shopping-cart-button"
              to="/cart"
              data-testid="shopping-cart-button"
            >
              <img
                className="cart-icon"
                src={ shoppingCart }
                alt="cart icon"
              />
            </Link>
          </div>
        </div>

        <div className="main-content-list-cards">
          <div className="category-list">
            <CategoryList categorieSelected={ this.categorieSelected } />
          </div>

          { haveProduct ? (
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
            <div className="text-main-page" data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </div>
          ) }

        </div>

      </div>
    );
  }
}

export default Home;
