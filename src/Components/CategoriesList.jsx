import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      category: [],
    };
    this.teste = this.teste.bind(this);
  }

  componentDidMount() {
    this.teste();
  }

  async teste() {
    const categories = await getCategories();
    this.setState({
      category: categories,
    });
  }

  render() {
    const { category } = this.state;
    const categories = category.map(({ name, id }) => (
      <label htmlFor={ id } key={ id }>
        <input data-testid="category" type="radio" />
        { name }
      </label>
    ));
    return (
      <div>
        { category !== [] ? categories : 'Loading...' }
      </div>
    );
  }
}
