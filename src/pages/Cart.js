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
    const itemsList = localStorage.getItem('cartItems');
    console.log(itemsList);
    if (itemsList) {
      const parsedItems = JSON.parse(itemsList);
      this.setState({
        cartItems: [...parsedItems],
      });
    }
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
