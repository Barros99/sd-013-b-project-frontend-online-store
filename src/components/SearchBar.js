import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchTerm, onChange } = this.props;

    return (
      <form onSubmit={ (e) => e.preventDefault() }>
        <input
          type="text"
          value={ searchTerm }
          onChange={ onChange }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
