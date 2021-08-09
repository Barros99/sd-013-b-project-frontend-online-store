import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <ul style={ { listStyle: 'none' } }>
        { categories.map(({ id, name }) => (
          <li key={ id }>
            <label data-testid="category" htmlFor={ id }>
              <input id={ id } type="radio" name="categories" />
              { name }
            </label>
          </li>
        )) }
      </ul>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.objectOf(PropTypes.string),
}.isRequired;
