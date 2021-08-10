import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.state = {
      product: [],
      idProduct: id,
    };
    this.cathProductID = this.cathProductID.bind(this);
  }

  componentDidMount() {
    this.cathProductID();
  }

  async cathProductID() {
    const { idProduct } = this.state;
    const response = await fetch(
      `https://api.mercadolibre.com/items/${idProduct}`,
    );
    const result = await response.json();
    this.setState(() => ({
      product: result,
    }));
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price } = product;
    console.log(product);
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
      </div>
    );
  }
}
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
