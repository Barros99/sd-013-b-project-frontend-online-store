import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { card } = this.props;
    return (
      <div className="cart">
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <div>
          {
            card.map(({ image, price, title, quantidade }) => (
              <div key={ title } data-testi="shopping-cart-product-name">
                <p data-testid="shopping-cart-product-name">{title}</p>
                <img src={ image } alt={ title } />
                <p>{price}</p>
                <p data-testid="shopping-cart-product-quantity">{quantidade}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Cart;

Cart.propTypes = {
  card: PropTypes.arrayOf(String).isRequired,
};
