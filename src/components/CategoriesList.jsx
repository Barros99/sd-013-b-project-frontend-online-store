import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as api from '../services/api';

class CategoriesList extends Component {
  constructor() {
    super();

    this.state = {
      categoriesList: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();
    this.setState({
      categoriesList: categories,
    });
  }

  render() {
    const { categoriesList } = this.state;
    const { onClick } = this.props;
    return (
      <form action="">
        {categoriesList.map((category, index) => (
          <div key={ index }>
            <input
              type="radio"
              name="category"
              value={ category.id }
              data-testid="category"
              onClick={ onClick }
            />
            <label htmlFor="category">{ category.name }</label>
          </div>
        ))}
      </form>
    );
  }
}

CategoriesList.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CategoriesList;
