import React from 'react';
import PropTypes from 'prop-types';

// import './style.css';

class SearchBar extends React.Component {
  handleClick = (event) => {
    event.preventDefault();
    const { searchTerm, onClick } = this.props;

    onClick('', searchTerm);
  }

  render() {
    const { searchTerm, onChange } = this.props;

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
          onClick={ this.handleClick }
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
  onClick: PropTypes.func.isRequired,
};

export default SearchBar;
