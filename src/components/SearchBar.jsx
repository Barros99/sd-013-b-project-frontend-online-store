import React from 'react';
import PropTypes from 'prop-types';

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
    const { handleClick } = this.props;
    return (
      <div>
        <input type="text" onChange={ this.captureValueText } data-testid="query-input" />
        <button
          type="button"
          data-testid="query-button"
          onClick={ handleClick }
          value={ searchText }
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

SearchBar.propTypes = { getSearch: PropTypes.func.isRequired };
