import React from 'react';
import * as api from '../services/api';

import { Link } from 'react-router-dom';
import CartIcon from '../components/CartIcon';
import SearchBar from '../components/SearchBar';
import CategoriesList from '../components/CategoriesList';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryID: '',
      categories: [],
      loading: true,
    };

    this.setCategory = this.setCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategoriesList();
  }

  setCategory(categoryID) {
    this.setState({
      categoryID,
    });
  }

  fetchCategoriesList() {
    api.getCategories().then((categories) => {
      this.setState({
        categories,
        loading: false,
      });
    });
  }

  render() {
    const { categories, loading, categoryID } = this.state;
    console.log(categoryID);
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <CartIcon />
        </Link>
        <SearchBar />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        { !loading && (
          <CategoriesList categories={ categories } setCategory={ this.setCategory } />) }
      </div>
    );
  }
}

export default Home;
