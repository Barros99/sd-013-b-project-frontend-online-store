import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = this.props;
    this.state = {
      returnOfApi: [],
      id,
    };
    this.findProduct = this.findProduct.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const { location: { state: { foo } } } = this.props;
    const returnApiCategories = await api.getProductsFromCategoryAndQuery(null, foo);
    this.setState({ returnOfApi: returnApiCategories.results });
  }

  findProduct() {
    const { id, returnOfApi } = this.state;
    const map = returnOfApi.filter((element) => element.id === id)
      .map((element) => element);
    return map;
  }

  render() {
    const foundProduct = this.findProduct();
    console.log(foundProduct);
    return (
      <div>
        {foundProduct.map((element) => (
          <section key={ element.id }>
            <h1 data-testid="">{element.title}</h1>
          </section>
        ))}
        <Link to="/shop">Shopping Cart</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      foo: PropTypes.string,
    }),
  }).isRequired,
};
export default ProductDetails;
