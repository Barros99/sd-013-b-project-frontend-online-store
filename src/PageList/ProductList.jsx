import React from 'react';
import PropTypes from 'prop-types';
import Categories from '../Components/Categories';
import Search from '../Components/Search';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductList extends React.Component {
  constructor() {
    super();
    this.categoriesFetch = this.categoriesFetch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clickChange = this.clickChange.bind(this);
    this.categorieUpdater = this.categorieUpdater.bind(this);

    this.state = {
      loading: true,
      categories: {},
      products: [],
      inputValue: '',
      categorie: '',
    };
  }

  componentDidMount() {
    this.categoriesFetch();
  }

  handleChange({ target }) {
    this.setState({ inputValue: target.value });
  }

  async clickChange() {
    const { updateState } = this.props;
    const { inputValue, categorie } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(categorie, inputValue);
    this.setState({ products: results, inputValue: '' });
    updateState(results);
  }

  categoriesFetch() {
    this.setState({ loading: true }, async () => {
      const categories = await getCategories();
      this.setState({ loading: false, categories });
    });
  }

  async categorieUpdater(categorie) {
    await this.setState({ categorie });
    this.clickChange();
  }

  render() {
    const { loading, categories, inputValue, products } = this.state;
    const loadingComp = <h1>loading</h1>;
    return (
      <div>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
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
          <span role="img" aria-label="lupa">🔎</span>
        </button>
        { loading ? loadingComp : <Categories
          categorieUpdater={ this.categorieUpdater }
          categories={ categories }
        />}
        <Search product={ products } />
      </div>
    );
  }
}

ProductList.propTypes = {
  updateState: PropTypes.fun,
}.isRequired;
