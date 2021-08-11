import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsCart: '',
    };
    this.showProducts = this.showProducts.bind(this);
  }

  componentDidMount() {
    this.showProducts();
  }

  showProducts() {
    const { location: { state: productsCart } } = this.props;
    this.setState(productsCart);
  }

  render() {
    const { productsCart } = this.state;
    if (productsCart.length === 0) {
      return (
        !productsCart ? <div>Carregando...</div> : (
          <div>
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          </div>
        )
      );
    }
    const productList = productsCart.reduce((countProduts, prod) => {
      const list = countProduts;
      if (prod.id in countProduts) {
        prod.quantity += 1;
      } else {
        prod.quantity = 1;
      }
      list.push(prod);
      return list;
    }, []);
    return (
      <div>
        {productList.map((prod) => (
          <div key={ prod.id }>
            <span data-testid="shopping-cart-product-name">{ prod.title }</span>
            <span data-testid="shopping-cart-product-quantity">{ prod.quantity }</span>
            <span>{ prod.price }</span>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      productsCart: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default ShoppingCart;
