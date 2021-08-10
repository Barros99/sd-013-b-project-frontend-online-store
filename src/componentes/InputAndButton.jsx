import React from 'react';
import PropTypes from 'prop-types';

export default class InputAndButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target }) {
    this.setState({ searchTerm: target.value });
  }

  render() {
    const { func } = this.props;
    const { searchTerm } = this.state;
    return (
      <div>
        <label htmlFor="inputSearch">
          <input
            data-testid="query-input"
            placeholder="digite..."
            type="text"
            onChange={ this.handleOnChange }
            id="inputSearch"
          />
        </label>
        <button
          data-testid="query-button"
          type="submit"
          onClick={ () => func(searchTerm) }
        >
          buscar
        </button>
      </div>
    );
  }
}

InputAndButton.propTypes = {
  func: PropTypes.func,
};

InputAndButton.defaultProps = {
  func: undefined,
};
