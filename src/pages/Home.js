import React from 'react';
import * as api from '../services/api';

import SearchBar from '../components/SearchBar';
import CategoriesList from '../components/CategoriesList';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: '',
      loading: true,
    };

    this.fetchCategoriesList = this.fetchCategoriesList.bind(this);
  }

  componentDidMount() {
    this.fetchCategoriesList();
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
    const { categories, loading } = this.state;

    return (
      <div>
        <SearchBar />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        { !loading && <CategoriesList categories={ categories } /> }
      </div>
    );
  }
}

export default Home;
