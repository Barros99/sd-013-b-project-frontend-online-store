import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product: { title, thumbmail, price } } = this.props;

    return (
      <div>
        <h3>
          { title }
        </h3>
        <img src={ thumbmail } alt={ title } />
        <h4>
          { price }
        </h4>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string,
    thumbmail: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

export default ProductCard;
