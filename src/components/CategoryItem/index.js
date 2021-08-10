import React from 'react';
import PropTypes from 'prop-types';

// import './style.css';

class CategoryItem extends React.Component {
  render() {
    const { categoryName, categoryId, selectedCategory, onChange } = this.props;

    return (
      <li>
        <input
          id={ categoryId }
          type="radio"
          name="category"
          value={ categoryId }
          checked={ selectedCategory === categoryId }
          onChange={ onChange }
        />
        <label htmlFor={ categoryId } data-testid="category">
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
