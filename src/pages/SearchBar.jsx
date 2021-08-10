import React from 'react';
import { Link } from 'react-router-dom';
import SearchByQuery from '../Componentes/SearchByQuery';
import HomeFilter from '../Componentes/HomeFilter';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {

    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const inputValue = event.target.value;
    return inputValue;
  }

  render() {
    return (
      <div>
        <div>
          <input data-testid="query-input" type="text" onChange={ this.handleInput } />
          <button data-testid="query-button" type="button">Pesquisar</button>
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h3>
        </div>
        <Link to="ShoppingCart" data-testid="shopping-cart-button">
          Carrinho
        </Link>
        <HomeFilter />
        <SearchByQuery
          onChange={ this.handleInput }
        />
      </div>
    );
  }
}

export default SearchBar;
