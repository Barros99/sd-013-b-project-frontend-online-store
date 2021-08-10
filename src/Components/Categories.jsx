import React, { Component } from 'react';
import * as api from '../services/api';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const fetchApi = await api.getCategories();
    this.setState({
      loading: false,
      categories: fetchApi,
    });
  }

  render() {
    const { categories, loading } = this.state;
    if (loading) return <h4>Loading</h4>;
    // console.log(this.state);
    return (
      <div>
        {categories.map(({ id, name }) => (
          <div key={ id }>
            <label htmlFor={ id } data-testid="category">
              <input
                type="radio"
                name="category"
                id={ id }
                value={ id }
              />
              { name }
            </label>
          </div>
        ))}
      </div>
    );
  }
}
