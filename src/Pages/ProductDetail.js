import React, { Component } from 'react';

class ProductDetail extends Component {
  render() {
    const detalhes = this.props.info.history.location.state.returnTo;
    return (
      <div data-testid="product-detail-name">
        <p>{detalhes.title}</p>
        <p>{detalhes.image}</p>
        <p>{detalhes.price}</p>
      </div>
    );
  }
}

export default ProductDetail;
