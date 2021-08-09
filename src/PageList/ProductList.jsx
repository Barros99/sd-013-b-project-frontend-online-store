import React from 'react';
import Categories from '../Components/Categories';
import { getCategories } from '../services/api';

export default class ProductList extends React.Component {
  constructor() {
    super();
    this.categoriesFetch = this.categoriesFetch.bind(this);

    this.state = {
      loading: true,
      categories: {},
    };
  }

  componentDidMount() {
    this.categoriesFetch();
  }

  categoriesFetch() {
    this.setState({ loading: true }, async () => {
      const categories = await getCategories();
      this.setState({ loading: false, categories });
    });
  }

  render() {
    const { loading, categories } = this.state;
    const loadingComp = <h1>loading</h1>;
    return (
      <>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        { loading ? loadingComp : <Categories categories={ categories } /> }
      </>
    );
  }
}
