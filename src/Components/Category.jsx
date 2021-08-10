import React, { Component } from 'react';
import { getCategories } from '../services/api';
import ComponentRadio from './ComponentRadio';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((response) => {
      const categories = response.map((category) => category);
      this.setState({ categories });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <form>
          {
            categories.map(({ id, name }) => (
              <ComponentRadio key={ id } name={ name } id={ id } />
            ))
          }
        </form>

      </div>
    );
  }
}

export default Category;
