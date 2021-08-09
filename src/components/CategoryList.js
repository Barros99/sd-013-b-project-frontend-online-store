import React from 'react';
import PropTypes from 'prop-types';

import CategoryItem from './CategoryItem';

import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const data = await api.getCategories();

    if (data) this.setState({ categories: data });
  };

  render() {
    const { categories } = this.state;
    const { selectedCategory, onChange } = this.props;

    return (
      <ul>
        {categories.map(({ id, name }) => (
          <CategoryItem
            key={ id }
            category={ name }
            selectedCategory={ selectedCategory }
            onChange={ onChange }
          />
        ))}
      </ul>
    );
  }
}

CategoryList.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CategoryList;
