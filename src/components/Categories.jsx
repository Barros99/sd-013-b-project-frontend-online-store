import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  render() {
    const { categories: { name, id } } = this.props;
    return (
      <label
        key={ id }
        htmlFor={ name }
      >
        { name }
        <input
          type="radio"
          data-testid="category"
          id={ name }
          key={ id }
          value={ name }
          name="category"
        />
      </label>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.objectOf(PropTypes.string).isRequired,
};
