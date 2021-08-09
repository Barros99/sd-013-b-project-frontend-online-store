// Componente feito para o Requisito 2 - realizado em grupo,
// com todos os membros participando.

import React from 'react';
import PropTypes from 'prop-types';
import CategoryList from './CategoryList';

export default class SearchBar extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <input
          onChange={ onChange }
          value={ value }
          type="text"
        />
        <p data-testid="home-initial-message">
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
