import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBar';

// import * as api from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      searchTerm: '',
      // category: '',
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

  render() {
    const { searchTerm, productList } = this.state;

    return (
      <div>
        <div className="header">
          <SearchBar
            searchTerm={ searchTerm }
            onChange={ this.handleSearchTermChange }
          />
        </div>
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
