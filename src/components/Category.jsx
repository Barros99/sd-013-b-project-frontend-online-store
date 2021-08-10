import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    this.handleCategory = this.handleCategory.bind(this);
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.updateState(categories);
  }

  handleCategory({ target }) {
    const { onChange } = this.props;
    const { value } = target;
    onChange(value);
  }

  updateState(categories) {
    this.setState({
      loading: false,
      categories,
    });
  }

  render() {
    const { loading, categories } = this.state;
    if (loading) return <h3>Loading</h3>;
    return (
      <div>
        {categories.map(({ id, name }) => (
          <div key={ id }>
            <label htmlFor={ id } data-testid="category">
              <input
                type="radio"
                name="category"
                id={ id }
                value={ id }
                onChange={ this.handleCategory }
              />
              {name}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

Category.propTypes = {
  onChange: PropTypes.func.isRequired,
};
