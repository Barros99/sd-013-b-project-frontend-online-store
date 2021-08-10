import React from 'react';
import ListaPro from '../Components/ListaPro';
import { Link } from 'react-router-dom';
class SearchField extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <ListaPro />
      </div>
    );
  }
}

export default SearchField;
