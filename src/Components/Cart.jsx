import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { card } = this.props;
    console.log(card);
    return (
      <div className="cart">
        {
          card.length === 0
            ? (
              <h1 data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </h1>
            )
            : <h1>Seu carrinho</h1>
        }
        {
          card.map(({ title, price, thumbnail, id }) => (
            <div key={ id }>
              <p data-testid="shopping-cart-product-name">{title}</p>
              <img src={ thumbnail } alt={ title } />
              <p>{price}</p>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default Cart;

Cart.propTypes = {
  card: PropTypes.arrayOf(String).isRequired,
};
