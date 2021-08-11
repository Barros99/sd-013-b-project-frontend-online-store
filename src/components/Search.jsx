import React from 'react';
import PropTypes from 'prop-types';
import '../styles/home.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { searchText, onClick } = this.props;
    return (
      <form className="form-search">
        <fieldset className="search-and-button">

          <label htmlFor="home-initial-message">
            <input
              className="input-search"
              data-testid="query-input"
              placeholder="Pesquise aqui"
              type="text"
              onChange={ searchText }
            />
          </label>

          <button
            data-testid="query-button"
            type="button"
            id="buton"
            className="search-button"
            onClick={ onClick }
          >
            Pesquisar
          </button>

        </fieldset>
      </form>
    );
  }
}

Search.propTypes = {
  searchText: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Search;
