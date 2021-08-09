import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Components/Categories';
import { getCategories } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    // console.log(this.state);
    const { categories } = this.state;
    return (
      <div>
        <label htmlFor="search-input">
          <input type="text" id="search-input" />
        </label>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h1>
        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        <Categories categories={ categories } />
      </div>
    );
  }
}

export default Home;
