import React, { Component } from 'react';
import * as api from '../services/api';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.requestCategoriesTypeRadio();
  }

  async requestCategoriesTypeRadio() {
    const response = await api.getCategories();
    this.setState({ categories: response });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        { categories.map((category) => (
          <li data-testid="category" key={ category.id }>
            { category.name }
          </li>
        ))}
      </div>
    );
  }
}
