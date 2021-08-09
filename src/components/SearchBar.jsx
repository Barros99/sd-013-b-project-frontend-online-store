// Componente feito para o Requisito 2 - realizado em grupo,
// com todos os membros participando.

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../css/SearchBar.css';
import CategoryList from './CategoryList';

export default class SearchBar extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <div className="input-container">
          <input
            onChange={ onChange }
            value={ value }
            type="text"
            className="div-input"
          />
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            <ShoppingCartIcon style={ { color: '#22ba24' } } fontSize="large" />
          </Link>
        </div>
        <p data-testid="home-initial-message" className="title">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoryList />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
