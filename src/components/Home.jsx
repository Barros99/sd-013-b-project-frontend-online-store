/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from './CategoriesList';
import SearchField from './SearchField';
import ProductList from './ProductList';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      categoryId: '',
    }

    this.onSearchText = this.onSearchText.bind(this);
    this.onCategoryId = this.onCategoryId.bind(this);
  }

  async getCategoriesList() {
    const { searchText, categoryId } = this.state;
    const products = await getProductsFromCategoryAndQuery(categoryId, searchText);
    return products.results;
  }

  onSearchText(textField) {
    this.setState({ searchText: textField });
  }

  onCategoryId(categoryName) {
    this.setState({ categoryId: categoryName });
  }

  render() {
    return (
      <div>
        <CategoriesList onCategoryId={ this.onCategoryId } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/cart">
          <span><BiCartAlt size={ 40 } /></span>
        </Link>
        <SearchField onSearchText={ this.onSearchText } />
        <ProductList products={ this.getCategoriesList() } />
      </div>
    );
  }
}
