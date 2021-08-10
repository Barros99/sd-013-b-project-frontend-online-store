import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { handleChange, searchText } = this.props;
    return (
      <div>
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <input
          type="text"
          value={ searchText }
          onChange={ handleChange }
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
