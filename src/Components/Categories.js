import React from 'react';
import api, { getCategories } from '../services/api';
import { Link } from 'react-router-dom';

class Categories extends React.Component {
  render() {
    const { categories } = this.state;
    const { categorie, checked, onChange } = this.props;
    return (
      // <nav>
      //   {/* <Link to="https://api.mercadolibre.com/sites/MLB/categories"></Link> */}
      //   { categories.map((categorie) => ) }
      // </nav>
      <input data-testid="home-initial-message" />
    );
  }
}

export default Categories;
