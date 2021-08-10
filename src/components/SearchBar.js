import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
    };
  }

  render() {
    const s = this.state;
    const p = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          value={ s.searchText }
          onChange={ (event) => this.setState({ searchText: event.target.value }) }
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ () => p.onSubmit(s.searchText) }
        >
          Buscar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
