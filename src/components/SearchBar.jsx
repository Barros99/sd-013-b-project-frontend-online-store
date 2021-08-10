import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.captureValueText = this.captureValueText.bind(this);

    this.state = {
      searchText: undefined,
    };
  }

  captureValueText({ target }) {
    this.setState({ searchText: target.value });
  }

  render() {
    const { searchText } = this.state;
    const { getSearch } = this.props;
    return (
      <section>
        <div className="search-bar">
          <input
            className="search-bar-input"
            type="text"
            onChange={ this.captureValueText }
            data-testid="query-input"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ handleClick }
            value={ searchText }
          >
            Pesquisar
          </button>
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </div>
        <div>
          <p data-testid="home-initial-message" className="home-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </section>
    );
  }
}

SearchBar.propTypes = { handleClick: PropTypes.func.isRequired };
