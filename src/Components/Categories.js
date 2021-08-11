import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    // const { categorie, checked, onChange } = this.props;
    // const { id, name } = categorie;
    const { onChange } = this.props;
    const { categories } = this.state;
    return (
      <div>
        {categories.map((category) => (
          <label key={ category.id } htmlFor={ category.id }>
            <input
              type="radio"
              name="category"
              id={ category.id }
              category={ category.name }
              data-testid="category"
              value={ category.id }
              onClick={ () => onChange(category.id) }
            />
            { category.name }
          </label>))}
      </div>
      // <li className="category" data-testid="category">
      //   <label htmlFor={ id }>
      //     <input
      //       type="radio"
      //       value={ id }
      //       id={ id }
      //       className="category-radio"
      //       checked={ checked === id }
      //       onChange={ onChange }
      //     />
      //     { name }
      //   </label>
      // </li>
    );
  }
}

Categories.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Categories;
