/* eslint-disable import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { BiCartAlt } from 'react-icons/bi';
import CategoriesList from './CategoriesList';
import SearchField from './SearchField';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <CategoriesList />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/cart">
          <span><BiCartAlt size={ 40 } /></span>
        </Link>
        <SearchField />
      </div>
    );
  }
}
