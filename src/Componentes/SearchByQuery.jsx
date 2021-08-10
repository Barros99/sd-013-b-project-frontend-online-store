import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchByQuery extends React.Component {
  constructor() {
    super();

    this.state = {
      produtos: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const object = await getProductsFromCategoryAndQuery('', 'livros');
    console.log(object);
    const products = object.results;
    this.setState({
      produtos: products,
    });
  }

  render() {
    const { produtos } = this.state;
    return (
      produtos.map((produto) => (
        <div data-testid="product" key={ produto.id }>
          <h5>{produto.title}</h5>
          <img src={ produto.thumbnail } alt={ produto.title } />
          <p>{`R$${produto.price}`}</p>
        </div>
      ))
    );
  }
}

export default SearchByQuery;
