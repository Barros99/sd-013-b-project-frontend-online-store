import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((response) => {
      this.setState({ categories: response });
    });
  }

  render() {
    const { handleRadioButton } = this.props;
    const { categories } = this.state;
    return (
      <div onChange={ handleRadioButton }>
        {categories.map(({ name, id }) => (
          <label data-testid="category" key={ id } htmlFor="categories">
            <input type="radio" value={ id } name="categories" />
            {name}
          </label>
        ))}
      </div>
    );
  }
}

Category.propTypes = ({
  handleRadioButton: PropTypes.func,
}).isRequired;
