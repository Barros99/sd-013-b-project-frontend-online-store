import React from 'react';
import { getCategories } from '../services/api';
// import { getCategories } from './services/api' ;

class ListCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((object) => this.setState({
      categories: [...object],
    }));
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {
          categories
            .map(({ id, name }) => <li key={ id } data-testid="category">{ name }</li>)
        }
      </ul>
    );
  }
}

export default ListCategories;
