import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { searchTerm, onChange, onClick } = this.props;

    return (
      <form>
        <input
          type="text"
          value={ searchTerm }
          onChange={ onChange }
          data-testid="query-input"
        />
        <button
          type="submit"
          onClick={ onClick('', searchTerm) }
          data-testid="query-button"
        >
          Vai!
        </button>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
