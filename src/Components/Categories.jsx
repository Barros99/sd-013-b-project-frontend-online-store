import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { id } }) {
    const { categorieUpdater } = this.props;
    categorieUpdater(id);
  }

  render() {
    const { categories } = this.props;
    return (
      <ul style={ { listStyle: 'none' } }>
        { categories.map(({ id, name }) => (
          <li key={ id }>
            <label data-testid="category" htmlFor={ id }>
              <input
                onChange={ this.handleChange }
                id={ id }
                type="radio"
                name="categories"
              />
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
  categorieUpdater: PropTypes.func,
}.isRequired;
