import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categorie extends Component {
  render() {
    const { categorie, checked, onChange } = this.props;
    const { id, name } = categorie;

    return (
      <li className="category" data-testid="category">
        <label htmlFor={ id }>
          <input
            type="radio"
            value={ id }
            id={ id }
            className="category-radio"
            checked={ checked === id }
            onChange={ onChange }
          />
          { name }
        </label>
      </li>
    );
  }
}

Categorie.propTypes = {
  categorie: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  checked: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Categorie;
