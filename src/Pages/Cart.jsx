import React from 'react';
import Card from '../Components/Card';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.loadCart();
  }

  loadCart = () => {
    const getProduct = sessionStorage.getItem('products');
    const newProduct = JSON.parse(getProduct);
    this.setState((before) => ({
      products: [...before.products, newProduct],
    }));
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        {products.map((item) => (
          <Card
            key={ item.id }
            title={ item.title }
            price={ item.price }
            thumbnail={ item.thumbnail }
          />
        ))}
        {console.log(products)}
      </div>
    );
  }
}
export default Cart;
