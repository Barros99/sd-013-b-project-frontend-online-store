import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class ListCategories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.requestApi();
  }

  requestApi = async () => {
    const apiResponse = await getCategories();
    this.setState({
      categories: apiResponse,
    });
  }

  render() {
    const { categories } = this.state;
    const { handleChange } = this.props;
    return (
      <div>
        <form onChange={ handleChange } name="category">
          { categories.map(({ name, id }) => (
            <div key={ id }>
              <label htmlFor="category">
                <input
                  type="radio"
                  id="category"
                  value={ id }
                  key={ id }
                  data-testid="category"
                />
                { name }
              </label>
            </div>
          )) }
        </form>
      </div>
    );
  }
}

ListCategories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ListCategories;
