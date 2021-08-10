import React from 'react';
import { Link } from 'react-router-dom';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: undefined,
    };

    this.captureValue = this.captureValue.bind(this);
  }

  captureValue(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    return (
      <section>
        <div className="search-bar">
          <input
            type="text"
            className="search-bar-input"
            placeholder="Busque por um produto"
            onChange={ this.captureValue }
          />
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </div>
        <div className="home-message">
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </section>
    );
  }
}
