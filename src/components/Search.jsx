import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const { onClick, onChange } = this.props;
    return (
      <section>
        <input
          type="text"
          data-testid="query-input"
          onChange={ onChange }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          type="button"
          onClick={ onClick }
          data-testid="query-button"
        >
          Pesquisar
        </button>

      </section>
    );
  }
}

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
