import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      productCategories: [],
      categorySelected: '',
      productFiltered: [],
    };
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  componentDidMount() {
    getCategories().then((data) => {
      this.setState({ productCategories: data });
    });
    getProductsFromCategoryAndQuery(this.categorySelected).then((data) => {
      this.setState({ productFiltered: data.results });
    });
  }

  handleCategoryChange({ target }) {
    this.setState({ categorySelected: target.value });
  }

  render() {
    const { productCategories, categorySelected, productFiltered } = this.state;
    return (
      <div>
        <section>
          <h2>Categorias</h2>
          <ul>
            {productCategories.map((category) => (
              <li key={ category.id } data-testid="category">
                <input
                  name="radio"
                  value={ category.id }
                  type="radio"
                  onChange={ this.handleCategoryChange }
                />
                { category.name }
              </li>
            ))}
          </ul>
        </section>
        <div>
          {categorySelected}
          {productFiltered.map((element) => (
            <span key={ element.id } data-testid="product"/>
          ))}
        </div>
      </div>

    );
  }
}

export default Categories;
