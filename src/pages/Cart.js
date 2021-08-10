import React from 'react';
import CartItem from '../components/CartItem';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    this.addProductToCart();
  }

  addProductToCart = () => {
    this.setState({
      cartItems: [],
    });
    const itemKeys = Object.keys(localStorage);
    itemKeys.forEach((element) => {
      const stringItem = localStorage.getItem(element);
      const newItem = [JSON.parse(stringItem)];
      this.setState((estadoAnterior) => ({
        cartItems: [...estadoAnterior.cartItems, ...newItem],
      }));
    });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        { cartItems.length !== 0
          ? cartItems.map((element) => (
            <CartItem
              key={ element.id }
              title={ element.title }
              thumbnail={ element.thumbnail }
              amount={ element.amount }
            />
          ))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> }
      </div>
    );
  }
}

export default Cart;
