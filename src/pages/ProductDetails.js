import React from 'react';
import PropTypes from 'prop-types';
import CartButton from '../components/CartButton';
import { getProductsFromCategoryAndQuery as ApiProducts } from '../services/api';
import CostumerEvaluation from '../components/CostumerEvaluation';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { productName, categoryId } = params;
    const requestProducts = await ApiProducts(categoryId, productName);
    const product = requestProducts.results[0];
    this.handleStateChange(product);
  }

  handleStateChange(product) {
    this.setState({
      title: product.title,
    });
  }

  render() {
    const { title } = this.state;
    return (
      <div className="div-productdetail">
        <div className="div-productdetail-link">
          <button type="button">Retornar</button>
          <CartButton />
        </div>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <div className="div-productdetail-central">
          <div className="div-productdetail-img">
            <img alt="test" />
          </div>
          <div className="div-productdetail-specification">
            <h4>Titulo para as especificações</h4>
            <ul>
              <li>
                Ul com a lista de especificações
              </li>
            </ul>
          </div>
          <div>
            <CostumerEvaluation title={ title } />
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productName: PropTypes.string,
      categoryId: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
