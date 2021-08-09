import React from 'react';
import PropTypes from 'prop-types';

class CategoryItem extends React.Component {
  render() {
    const { category, selectedCategory, onChange } = this.props;

    return (
      <div>
        <input
          type="radio"
          name="category"
          value={ category }
          checked={ selectedCategory === category }
          onChange={ onChange }
        />
        <p data-testid="category">{category}</p>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CategoryItem;
