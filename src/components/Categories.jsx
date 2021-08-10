import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  render() {
    const { categories: { name, id }, onChange } = this.props;
    return (
      <label
        key={ id }
        htmlFor={ name }
      >
        { name }
        <input
          type="radio"
          id={ name }
          data-testid="category"
          key={ id }
          value={ name }
          name="category"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.objectOf(PropTypes.string).isRequired,
};
