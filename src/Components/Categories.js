import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
// import PropTypes from 'prop-types';

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
    const { categories } = this.state;
    return (
      <div>
        {categories.map((category) => (
          <li
            key={ category.id }
            category={ category.name }
            data-testid="category"
          >
            <Link to={ `search?category=${category.id}&q=${category.name}` }>
              { category.name }
            </Link>
          </li>))}
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

// Categories.propTypes = {
//   categories: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//   }).isRequired,
// };

export default Categories;
