import React, { Component } from 'react';
import Header from '../Components/Header';
import * as api from '../services/api';

class Initial extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <Header />

        {
          categories.map(({ name, id }) => (
            <div key={ id } data-testid="category">
              <input type="radio" />
              { name }
            </div>
          ))
        }

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

      </div>
    );
  }
}

export default Initial;
