import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt="Product Banner" />
        <p>{ price }</p>
      </div>
    );
  }
}

// MovieCard.propTypes = {
//   movie: PropTypes.shape({
//     id: PropTypes.number,
//     imagePath: PropTypes.string,
//     price: ProTypes.string,
//     title: PropTypes.string,
//   }).isRequired,
// };

export default ProductCard;
