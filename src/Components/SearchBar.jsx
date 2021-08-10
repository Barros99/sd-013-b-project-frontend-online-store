import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { handleChange, searchText } = this.props;
    return (
      <section>
        <label htmlFor="category" data-testid="home-initial-message">
          <h4>
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h4>
          <input
            type="text"
            name="searchText"
            id="category"
            value={ searchText }
            onChange={ handleChange }
          />
        </label>
      </section>
    );
  }
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
