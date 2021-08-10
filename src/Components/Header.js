import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import ProductList from './ProductList';
import TrybeBlue from './Imgs/trybeLivreBlue.png';

export default class Header extends Component {
  render() {
    return (
      <section className="Header">
        <div>
          <img
            src={ TrybeBlue }
            alt="Logotipo da empresa Trybe Livre"
            className="logotipo"
          />
        </div>
        <div className="searchBar">
          <ProductList />
        </div>
        <div>
          <Link
            to="/carrinho"
            data-testid="shopping-cart-button"
          >
            <AiOutlineShoppingCart className="icon" />
          </Link>
        </div>
      </section>
    );
  }
}
