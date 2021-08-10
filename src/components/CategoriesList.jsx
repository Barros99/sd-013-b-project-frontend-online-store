import React from 'react';
import { getCategories } from '../services/api';
import PropTypes from 'prop-types';

export default class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getListCategories();
  }

  onHandleClick({ target }) {
    const { onCategoryId } = this.props;
    const { value } = target;
    onCategoryId(value);
  }

  async getListCategories() {
    const categories = await getCategories();
    this.setState({
      products: [...categories],
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {products.map((product) => (
          <label data-testid="category" htmlFor={ product.name } key={ product.id }>
            {product.name}
            <input
              id={ product.name }
              type="radio"
              value={ product.id }
              name="categorias"
              onClick={ this.onHandleClick }
            />
          </label>
        ))}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  onCategoryId: PropTypes.func.isRequired,
};
