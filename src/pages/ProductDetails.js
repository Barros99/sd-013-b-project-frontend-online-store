import React from 'react';
import PropTypes from 'prop-types';
import CartIcon from '../components/CartIcon';

export default class ProductDetails extends React.Component {
  render() {
    const { location: { product } } = this.props;
    const { addToCart } = this.props;
    const { title, price, thumbnail, attributes } = product;
    return (
      <div>
        <CartIcon />
        <h4 data-testid="product-detail-name">{title}</h4>
        <h4>{`R$ ${price}`}</h4>
        <img src={ thumbnail } alt="" />
        <ul>
          { attributes.map((attribute) => (
            <li key={ attribute.id }>
              {`${attribute.name}: ${attribute.value_name}`}
            </li>))}
        </ul>
        <button
          type="button"
          onClick={ () => addToCart(product) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      attributes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          name: PropTypes.string,
          value_name: PropTypes.string,
        }),
      ),
    }),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
