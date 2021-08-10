import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../Components/Card';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorysLoaded: false,
      categorys: [],
      itemText: '',
      selectCategory: '',
      products: [],
      productsLoad: false,
      product: {},
    };
  }

  componentDidMount() {
    this.fetchCategorys();
  }

  fetchCategorys = () => {
    getCategories()
      .then((list) => {
        this.setState({
          categorys: list.map((category) => (
            <button
              type="button"
              data-testid="category"
              key={ category.id }
              onClick={ () => {
                this.updateSelectCategory(category.id);
                this.renderList();
              } }
            >
              { category.name }
            </button>)),
          categorysLoaded: true,
        });
      });
  }

updateItemText = ({ target }) => {
  const { value } = target;
  this.setState({
    itemText: value,
  });
}

updateSelectCategory = (id) => {
  this.setState({
    selectCategory: id,
  });
}

updateProduct = (item) => {
  this.setState({
    product: item,
  });
}

addCart = () => {
  const { product } = this.state;
  sessionStorage.setItem('products', JSON.stringify(product));
}

renderList = () => {
  const { itemText, selectCategory } = this.state;
  getProductsFromCategoryAndQuery(selectCategory, itemText)
    .then((list) => {
      this.setState({
        products: list.results.map((item) => (
          <Card
            key={ item.id }
            title={ item.title }
            price={ item.price }
            thumbnail={ item.thumbnail }
            onClick={ async () => {
              await this.updateProduct(item);
              this.addCart();
            } }
            value={ item.id }
          />)),
        productsLoad: true,
      });
    });
}

render() {
  const { categorysLoaded, categorys, products, productsLoad } = this.state;
  return (
    <div className="home-page">
      <p
        className="home-page-title"
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      <div className="another-itens">
        <ul>
          <div className="buttons-div">
            { categorysLoaded ? categorys : <h2>Carregando</h2> }
          </div>
        </ul>
        <div>
          <input onChange={ this.updateItemText } data-testid="query-input" type="text" />
          <button
            onClick={ this.renderList }
            data-testid="query-button"
            type="button"
          >
            Buscar
          </button>
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </Link>
        </div>
        <div className="products">
          { productsLoad ? products : <h2>Nenhum produto encontrado</h2> }
        </div>
      </div>
    </div>
  );
}
}

export default HomePage;
