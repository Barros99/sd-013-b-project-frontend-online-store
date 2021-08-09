// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <label htmlFor="input-search" data-testid="home-initial-message">
          <input type="text" name="search" id="input-search" />
          Digite algum termo de pesquisa ou escolha uma categoria.
          <br />
          {/* <FontAwesomeIcon to="/shoppingcart" icon="fa-solid fa-cart-shopping" /> */}
          <Link data-testid="shopping-cart-button" to="/shoppingcart">Carrinho</Link>
          <Categories />
        </label>
      </div>
    );
  }
}

export default Home;
