import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
import { Link } from 'react-router-dom';
>>>>>>> 0c50130908035f5facc4e19fc867d9918ae69494

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
    this.captureValueText = this.captureValueText.bind(this);

    this.state = {
      searchText: undefined,
    };
  }

  onClick() {
    const { searchText } = this.state;
    const { getSearch } = this.props;
    console.log(searchText);
    getSearch({ searchText });
  }

  captureValueText({ target }) {
    this.setState({ searchText: target.value });
=======
    this.state = {
      searchText: undefined,
    };

    this.captureValue = this.captureValue.bind(this);
  }

  captureValue(event) {
    this.setState({ searchText: event.target.value });
>>>>>>> 0c50130908035f5facc4e19fc867d9918ae69494
  }

  render() {
    const { searchText } = this.state;
    return (
<<<<<<< HEAD
      <div>
        <input type="text" onChange={ this.captureValueText } data-testid="query-input" />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.onClick }
          value={ searchText }
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
=======
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
>>>>>>> 0c50130908035f5facc4e19fc867d9918ae69494
    );
  }
}

SearchBar.propTypes = {
  captureValueText: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
