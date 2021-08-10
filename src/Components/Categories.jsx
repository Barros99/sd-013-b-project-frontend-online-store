import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      selected: '',
      filtered: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((resp) => {
      this.setState({
        products: resp,
      });
    });
    api.getProductsFromCategoryAndQuery(this.selected).then((resp) => {
      this.setState({ filtered: resp.results });
    });
  }

  handleChange({ target }) {
    this.setState({ selected: target.value });
  }

  render() {
    const { products, selected, filtered } = this.state;
    return (
      <div>
        <ul style={ { listStyle: 'none' } }>
          {products.map(({ id, name }) => (
            <li key={ id }>
              <label data-testid="category" htmlFor={ id }>
                <input
                  id={ id }
                  type="radio"
                  name="categories"
                  onChange={ this.handleChange }
                />
                {name}
              </label>
            </li>
          ))}
        </ul>
        <div>
          { selected }
          { filtered.map((el) => (
            <span key={ el.id } data-testid="product" />
          )) }
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.objectOf(PropTypes.string),
}.isRequired;
