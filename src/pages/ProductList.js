import React from 'react';

import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';

// import * as api from '../services/api';

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
        />
        <CategoryList
          selectedCategory={ selectedCategory }
          onChange={ this.handleCategoryChange }
        />
        {productList.length ? (
          <p>Tem produtos</p>
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
