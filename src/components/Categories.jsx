import React from 'react';
import * as api from '../services/api';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.updateCategories();
  }

  async updateCategories() {
    const response = await api.getCategories();
    this.setState({ categories: response });
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map(({ name, id }) => (
          <li key={ id } data-testid="category">{name}</li>
        ))}
      </ul>
    );
  }
}
