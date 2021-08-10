import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryList extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <ul>
          { categories
            .map((category) => (
              <div key={ category.id }>
                <label
                  htmlFor={ `category-${category.name}` }
                  data-testid="category"
                >
                  <input
                    type="radio"
                    name="category"
                    id={ `category-${category.name}` }
                  />
                  { category.name }
                </label>
              </div>
            ))}
        </ul>
      </div>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default CategoryList;
