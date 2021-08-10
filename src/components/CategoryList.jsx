import React from 'react';
import * as api from '../services/api';
import '../styles/categoryList.css';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = (
      { categories: [] }
    );
    this.getCategoriesApi = this.getCategoriesApi.bind(this);
  }

  componentDidMount() {
    this.getCategoriesApi();
  }

  async getCategoriesApi() {
    const list = await api.getCategories();
    this.setState({
      categories: list,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <ul className="list-content">
        {categories.map((category) => (
          <li key={ category.id } data-testid="category">{ category.name }</li>))}
      </ul>
    );
  }
}

export default CategoryList;
