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
              <li data-testid="category" key={ category.id }>{ category.name }</li>
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
