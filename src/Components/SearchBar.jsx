import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { handleChange, searchText } = this.props;
    return (
      <div>
        <label htmlFor="category" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            name="searchText"
            id="category"
            value={ searchText }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
