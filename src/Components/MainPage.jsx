import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from './CategoryList';
import Loading from './Loading';
import ProductList from './ProductList';
import * as api from '../services/api';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
    };
  }

  componentDidUpdate() {}

  render() {
    const { inputSearch, categories, loadingCategories, handleChange } = this.props;
    const loadingElement = <Loading />;
    return (
      <div className="main">
        <div className="category-list">
          <h2 className="title-category-list">Categorias:</h2>
          {loadingCategories
            ? loadingElement
            : <CategoryList categories={ categories } />}
        </div>
        <div className="search">
          <label htmlFor="input-search" data-testid="home-initial-message">
            <input
              data-testid="query-input"
              type="text"
              value={ inputSearch }
              name="inputSearch"
              id="input-search"
              onChange={ handleChange }
            />
            <button
              data-testid="query-button"
              type="submit"
              className="btn btn-default"
              onClick={ () => {
                api.getProductsFromCategoryAndQuery('', inputSearch)
                  .then((apiSearch) => {
                    this.setState({
                      search: apiSearch.results,
                    });
                    this.state.search.map((product) => (<ProductList produtos={ product } key={ product.title } />));
                  });
              } }
            >
              Pesquisar

            </button>
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,
  loadingCategories: PropTypes.bool.isRequired,
  inputSearch: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default MainPage;
