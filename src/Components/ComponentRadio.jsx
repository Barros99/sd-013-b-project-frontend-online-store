import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentRadio extends Component {
  render() {
    const { name, id, handleClick } = this.props;
    return (
      <label htmlFor={ id }>
        {name}
        <input type="radio" name="category" id={ id } data-testid="category" onClick={ handleClick } />
      </label>
    );
  }
}

export default ComponentRadio;

ComponentRadio.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
