import React from 'react';

class ProdructCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <p>
          { title }
        </p>
        <img src={ thumbnail } alt="test" />
        <h2>
          { price }
        </h2>
      </div>
    );
  }
}

export default ProdructCard;
