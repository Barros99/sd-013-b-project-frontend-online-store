import React, { Component } from 'react';
import * as api from '../../services/api';
import CategoriesList from '../CategoriesList';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
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
      });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <>
        <input type="text" placeholder="Digite o nome do produto" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <CategoriesList categories={ categories } />
      </>
    );
  }
}

export default Home;
