import React from 'react';
import { getCategories } from '../services/api';
import CreateList from './CreateList';

class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const response = await getCategories();
    this.changeState(response);
  }

  changeState(categories) {
    this.setState({
      categories: [...categories],
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {categories.map((category) => (
            <CreateList key={ category.id } name={ category.name } />
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
