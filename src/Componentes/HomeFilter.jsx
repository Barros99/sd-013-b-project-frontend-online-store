import React, { Component } from 'react';
import ListCategories from './ListCategories';

class HomeFilter extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      query: '',
      category: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <ListCategories handleChange={ this.handleChange } />
      </div>
    );
  }
}

export default HomeFilter;