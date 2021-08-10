import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const dataCategories = await api.getCategories();
    this.setState({
      categories: dataCategories,
    });
  }

  render() {
    const { categories } = this.state;
    const { handleClick } = this.props;
    return (
      <div>
        {categories.map(({ id, name }) => (
          <label
            htmlFor={ id }
            data-testid="category"
            key={ id }
          >
            <input
              type="radio"
              id={ id }
              name="categorie"
              onClick={ handleClick }
            />
            { name }
            <br />
          </label>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Categories;
