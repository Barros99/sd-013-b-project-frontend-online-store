import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      categoryId: '',
    };
  }

  componentDidMount() {
    this.fetchApi();
    const { categoryId } = this.state;
    localStorage.setItem('categoryId', categoryId);
  }

  componentDidUpdate() {
    const { categoryId } = this.state;
    localStorage.setItem('categoryId', categoryId);
  }

  handleClick = (event) => {
    this.setState({ categoryId: event.target.id });
  }

  async fetchApi() {
    const dataCategories = await api.getCategories();
    this.setState({
      categories: dataCategories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map(({ id, name }) => (
          <label
            htmlFor={ id }
            data-testid="category"
            key={ id }
          >
            <input
              type="radio"
              id={ id }
              name="categorie"
              onClick={ this.handleClick }
              // categoryId={ categoryId }
            />
            { name }
            <br />
          </label>
        ))}
      </div>
    );
  }
}

export default Categories;
