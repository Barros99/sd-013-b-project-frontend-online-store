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
    getCategories().then((value) => this.setState({ categories: value }));
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        { categories.map((categorie) => (
          <li key={ categorie.id }>
            { categorie.name }
          </li>
        )) }
      </ul>
    );
  }
}
