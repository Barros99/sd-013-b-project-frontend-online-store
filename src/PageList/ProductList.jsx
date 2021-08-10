import React from 'react';
import Categories from '../Components/Categories';
import Search from '../Components/Search';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';


export default class ProductList extends React.Component {
  constructor() {
    super();
    this.categoriesFetch = this.categoriesFetch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickChange = this.clickChange.bind(this);


    this.state = {
      loading: true,
      categories: {},
      products: [],
      inputValue: '',
    };
  }

  componentDidMount() {
    this.categoriesFetch();
  }

  handleChange({ target }) {
    this.setState({ inputValue: target.value });
  }

  async clickChange() {
    const { inputValue } = this.state;
    const returnFetch = await getProductsFromCategoryAndQuery(undefined, inputValue);
    this.setState({ products: returnFetch.results, inputValue: '' });
  }
  
  categoriesFetch() {
    this.setState({ loading: true }, async () => {
      const categories = await getCategories();
      this.setState({ loading: false, categories });
    });
  }
  
  queryFetch(search) {
    this.setState({ loading: true }, async () => {
      const products = await getProductsFromCategoryAndQuery(undefined, search);
      this.setState({ loading: false, products });
    });
  }

  render() {
    const { loading, categories, inputValue, products } = this.state;
    const loadingComp = <h1>loading</h1>;
    return (
          <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
        { loading ? loadingComp : <Categories categories={ categories } /> }
        <input
          data-testid="query-input"
          value={ inputValue }
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.clickChange }
        >
          🔎
        </button>
        <Search product={ products } />
      
    );
  }
}
