import React, { Component } from 'react';
import { getCategories } from './services/api';

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.updateState(categories);
  }

  updateState(categories) {
    this.setState({
      loading: false,
      categories,
    });
  }

  render() {
    const { loading, categories } = this.state;
    if (loading) return <h3>Loading</h3>;
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
              {name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}
