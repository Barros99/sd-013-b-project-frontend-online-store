import React from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends React.Component {
  render() {
    const { categoryName, categoryId, selectedCategory, onChange } = this.props;

    return (
      <li>
        <input
          id="category"
          type="radio"
          name="category"
          value={ categoryId }
          checked={ selectedCategory === categoryId }
          onChange={ onChange }
        />
        <label htmlFor="category" data-testid="category">
          {categoryName}
        </label>
      </li>
    );
  }
}

CategoryItem.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CategoryItem;
