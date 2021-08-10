import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import Categories from '../Components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';
// import { getCategories } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // categories: [],
      products: [],
      categoryId: '',
      query: '',
    };
  }

  fetchProducts = async () => {
    const { categoryId, query } = this.state;
    const products = await getProductsFromCategoryAndQuery(categoryId, query);
    console.log(products);
    this.setState({
      products: products.results,
    });
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  }

  // componentDidMount() {
  //   this.fetchCategories();
  // }

  // fetchCategories = async () => {
  //   const categories = await getCategories();
  //   this.setState({
  //     categories,
  //   });
  // }

  render() {
    const { query, products } = this.state;
    return (
      <div>
        <label htmlFor="search-input">
          <input
            type="text"
            id="search-input"
            data-testid="query-input"
            value={ query }
            onChange={ this.handleInputChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.fetchProducts }
        >
          Pesquisar
        </button>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h1>
        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        <Categories />
        <div>
          {products.map((product) => (
            <Card
              key={ product.id }
              title={ product.title }
              image={ product.thumbnail }
              price={ product.price }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
