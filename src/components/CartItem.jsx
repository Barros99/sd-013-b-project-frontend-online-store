import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    const { results } = this.props;
    this.state = {
      results,
    };
    this.showResults = this.showResults.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { results } = this.props;
    if (results !== prevProps.results) {
      this.updateState(results);
    }
  }

  updateState = (results) => {
    this.setState({ results });
  };

  showResults() {
    const { addToCart } = this.props;
    const { results } = this.state;
    const card = results.map((result) => {
      const { title, thumbnail, price } = result;
      return (
        <div key={ title } data-testid="product">
          <p>{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{price}</p>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => {
              addToCart(result);
            } }
          >
            Add to Cart
          </button>
        </div>
      );
    });
    return card;
  }

  render() {
    const { products } = this.props;
    return (
      products.map((product, index) => (
        <div key={ index } data-testid="product-add-to-cart">
          <p data-testid="shopping-cart-product-name">{ product.title }</p>
          <p data-testid="shopping-cart-product-quantity">1</p>
        </div>))
    );
  }
}

CartItem.propTypes = {
  addToCart: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartItem;
