import React from 'react';
import { Link } from 'react-router-dom';

import { getCategories } from '../services/api';
import ShoppingCartIcon from './ShoppingCartIcon';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  async componentDidMount() {
    await this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          <ShoppingCartIcon />
        </Link>

        <input type="text" />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h3>
        <ul>
          {categories.map((categorie) => (
            <li
              key={ categorie.id }
              data-testid="category"
            >
              { categorie.name }
            </li>))}
        </ul>
      </div>
    );
  }
}

export default Home;
