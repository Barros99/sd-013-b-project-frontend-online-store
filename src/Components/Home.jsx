import React from 'react';
import { getCategories } from '../services/api';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount = () => {
    getCategories();
  }

  render() {
    const { categories } = this.state;
    return (
      <h1>{ categories }</h1>
    );
  }
}
