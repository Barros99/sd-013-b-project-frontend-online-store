import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import '../styles/home.css';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = (
      { categories: [] }
    );
    this.getCategoriesApi = this.getCategoriesApi.bind(this);
  }

  componentDidMount() {
    this.getCategoriesApi();
  }

  async getCategoriesApi() {
    const list = await api.getCategories();
    this.setState({
      categories: list,
    });
  }

  render() {
    const { categories } = this.state;
    const { categorieSelected } = this.props;

    return (
      <div className="list-content">
        {categories.map((category) => (
          <label key={ category.id } data-testid="category" htmlFor={ category.id }>
            <input
              type="radio"
              name="category"
              id={ category.id }
              onClick={ (event) => categorieSelected(event.target.id) }
            />
            { category.name }
            <br />
          </label>))}
      </div>
    );
  }
}

CategoryList.propTypes = {
  categorieSelected: PropTypes.func.isRequired,
};

export default CategoryList;
