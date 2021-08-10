import React from 'react';
import { getCategories } from '../services/api';

export default class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getListCategories();
  }

  onHandleClick({ target }) {
    const { value } = target;
    console.log(value);
  }

  async getListCategories() {
    const categories = await getCategories();
    this.setState({
      products: [...categories],
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {products.map((product) => (
          <label data-testid="category" htmlFor={ product.name } key={ product.id }>
            {product.name}
            <input
              id={ product.name }
              type="radio"
              value={ product.id }
              name="categorias"
              onClick={ this.onHandleClick }
            />
          </label>
        ))}
      </div>
    );
  }
}
