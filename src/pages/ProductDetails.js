import React from 'react';
import PropTypes from 'prop-types';

//

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      product: {},
    };
  }

  componentDidMount() {
    this.getProductFromLocalStorage();
  }

  getProductFromLocalStorage = () => {
    const savedProduct = localStorage.getItem('product-details');

    if (savedProduct) {
      this.setState({ loading: false, product: JSON.parse(savedProduct) });
    }
  };

  render() {
    const { loading, product } = this.state;

    if (loading) {
      return <p>Loading</p>;
    }

    return (
      <div>
        <p data-testid="product-detail-name">{product.title}</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{product.price}</p>
        {product.attributes.map((attribute) => (
          <div key={ attribute.name }>
            <p>{`${attribute.name}: ${attribute.value_name}`}</p>
          </div>
        ))}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.objectOf(PropTypes.string).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDetails;
