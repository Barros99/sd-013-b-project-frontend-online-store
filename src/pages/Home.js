import React from 'react';

import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

import * as api from '../services/api';

class Home extends React.Component {
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

    const list = response.results.map((element) => ({
      id: element.id,
      title: element.title,
      thumbnail: element.thumbnail,
      price: element.price,
    }));

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
        <ProductList productList={ productList } />
      </div>
    );
  }
}

export default Home;
