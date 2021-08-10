import React from 'react';
import { getCategories } from '../services/api';
import SearchBar from './SearchBar';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      searchText: '',
    };
  }

  componentDidMount = () => {
    getCategories().then((value) => this.setState({ categories: value }));
  }

  handleChange = ({ target }) => {
    this.setState({ searchText: target.value });
  }

  render() {
    const { categories, searchText } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          handleChange={ this.handleChange }
        />
        <ul>
          { categories.map(({ id, name }) => (
            <li key={ id } data-testid="category">
              { name }
            </li>
          )) }
        </ul>
      </div>
    );
  }
}
