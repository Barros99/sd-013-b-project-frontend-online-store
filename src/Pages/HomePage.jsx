import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorysLoaded: false,
      categorys: [],
    };
  }

  componentDidMount() {
    this.fetchCategorys();
  }

  fetchCategorys = () => {
    getCategories()
      .then((list) => {
        this.setState({
          categorys: list.map((category) => (
            <li
              data-testid="category"
              key={ category.id }
            >
              { category.name }
            </li>)),
          categorysLoaded: true,
        });
      });
  }

  render() {
    const { categorysLoaded, categorys } = this.state;
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <ul>
          { categorysLoaded ? categorys : <h2>Carregando...</h2> }
        </ul>
      </div>
    );
  }
}

export default HomePage;
