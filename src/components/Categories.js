import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      productCategories: [],
    };
  }

  componentDidMount() {
    getCategories().then((data) => {
      this.setState({ productCategories: data });
    });
  }

  render() {
    const { productCategories, name } = this.state;
    return (
      <div>
        <section>
          <h2>Categorias</h2>
          <ul>
            {productCategories.map((category) => (
              <li key={ category.id } data-testid="category">{ name }</li>
            ))}
          </ul>
        </section>
      </div>

    );
  }
}

export default Categories;
