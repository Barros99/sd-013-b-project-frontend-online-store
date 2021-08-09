import React from 'react';

import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';

import * as api from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      searchTerm: '',
      selectedCategory: '',
    };
  }

  componentDidMount() {
    //
  }

  handleSearchTermChange = ({ target }) => {
    this.setState({
      searchTerm: target.value,
    });
  };

  listProducts = async (category, query) => {
    const response = await api.getProductsFromCategoryAndQuery(category, query);
    const list = response.results.map((element) => (
      <div data-testid="product" key={ element.id }>
        <h2>{ element.title }</h2>
        <img src={ element.thumbnail } alt={ `imagem de ${element.title}` } />
        <p>{ element.price }</p>
      </div>
    ));
    this.setState({
      productList: list,
    });
  }

  handleCategoryChange = ({ target }) => {
    this.setState({
      selectedCategory: target.value,
    });
  };

  render() {
    const { searchTerm, productList, selectedCategory } = this.state;

    return (
      <div>
        <SearchBar
          searchTerm={ searchTerm }
          onChange={ this.handleSearchTermChange }
          onClick={ this.listProducts }
        />
        <CategoryList
          selectedCategory={ selectedCategory }
          onChange={ this.handleCategoryChange }
        />
        {productList.length ? (
          productList.map((element) => element)
        ) : (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
      </div>
    );
  }
}

export default ProductList;
