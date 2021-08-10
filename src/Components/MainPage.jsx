import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from './CategoryList';
import Loading from './Loading';

class MainPage extends Component {
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
              type="text"
              value={ inputSearch }
              name="inputSearch"
              id="input-search"
              onChange={ handleChange }
            />
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
