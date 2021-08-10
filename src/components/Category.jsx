import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((response) => {
      this.setState({ categories: response });
    });
  }

  render() {
    const { categories } = this.state;
    return (

      <div>
        {categories.map(({ name, id }) => (
          <label key={ id } htmlFor="check">
            <input
              name="check"
              data-testid="category"
              type="radio"
              value={ id }
            />
            {name}
          </label>
        ))}
      </div>
    );
  }
}
