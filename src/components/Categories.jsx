import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.updateCategories();
  }

  async updateCategories() {
    const response = await api.getCategories();
    this.setState({ categories: response });
  }

  render() {
    const { categories } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        {categories.map(({ name, id }) => (
          <label htmlFor={ id } key={ id }>
            <input
              type="radio"
              data-testid="category"
              id={ id }
              name="item"
              onClick={ onClick }
            />
            {name}
            {' '}
            <br />
          </label>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  onClick: PropTypes.func.isRequired,
};
