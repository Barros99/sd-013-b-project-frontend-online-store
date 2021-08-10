import React from 'react';
import { getCategories } from '../services/api';
import SearchBar from './SearchBar';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      searchText: '',
      searchCheckbox: false,
    };
  }

  componentDidMount = () => {
    getCategories().then((value) => this.setState({ categories: value }));
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { categories, searchText, searchCheckbox } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          handleChange={ this.handleChange }
        />
        { categories.map(({ id, name }) => (
          <div key={ id } data-testid="category">
            <label htmlFor="categories">
              <input
                type="checkbox"
                name="searchCheckbox"
                id="categories"
                value={ searchCheckbox }
                onChange={ this.handleChange }
              />
              { name }
            </label>
          </div>
        )) }
      </div>
    );
  }
}
