import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesAside from './CategoriesAside';
import SearchBar from './SearchBar';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      category: target.value,
    });
  }

  render() {
    const { category } = this.state;

    return (
      <div>
        <SearchBar category={ category } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/shopping-cart">
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Adicionar Carrinho
          </button>
        </Link>
        <aside>
          <CategoriesAside value={ category } handleChange={ this.handleChange } />
        </aside>
      </div>
    );
  }
}

export default Home;
