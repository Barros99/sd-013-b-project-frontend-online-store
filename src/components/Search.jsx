import React from 'react';
import PropTypes from 'prop-types';
import '../styles/search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { searchText, onClick } = this.props;
    return (
      <form className="form">
        <fieldset>

          <label htmlFor="home-initial-message">
            <input
              data-testid="query-input"
              placeholder="Digite algum termo"
              type="text"
              onChange={ searchText }
            />
          </label>

          <button
            data-testid="query-button"
            type="button"
            id="buton"
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
