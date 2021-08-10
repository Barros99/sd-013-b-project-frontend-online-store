import React from 'react';

import { Link } from 'react-router-dom';
import ListaCat from '../Components/ListaCat';
import ListItems from '../componentes/ListItems';

class SearchField extends React.Component {
  render() {
    return (
      <div className="search">
        <ListItems />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <ListaCat />
      </div>
    );
  }
}

export default SearchField;
