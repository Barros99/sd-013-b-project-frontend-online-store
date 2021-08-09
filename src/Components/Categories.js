import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from '../Pages/Home';

class Categories extends Component {
  render() {
    // const { categorie, checked, onChange } = this.props;
    // const { id, name } = categorie;
    const { categories } = this.props;

    return (
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
      <div>
        {/* {categories.map((categorie) => <Home key={ categorie.id } categorie={ categorie.name } />)} */}
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Categories;
