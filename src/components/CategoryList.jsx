import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CreateList from './CreateList';
import ListItems from './ListItems';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      filtredItems: [],
      selectedQry: '',
    };
    this.handleSelectedCategory = this.handleSelectedCategory.bind(this);
    this.fetchSelectedCategory = this.fetchSelectedCategory.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  handleSelectedCategory({ target }) {
    this.fetchSelectedCategory(target.value);
  }

  async fetchSelectedCategory(param) {
    const { selectedQry } = this.state;
    const response = await getProductsFromCategoryAndQuery(param, selectedQry);
    this.setState({
      filtredItems: response.results,
    });
  }

  async fetchAPI() {
    const response = await getCategories();
    this.changeState(response);
  }

  changeState(categories) {
    this.setState({
      categories: [...categories],
    });
  }

  render() {
    const { categories, filtredItems } = this.state;
    return (
      <div>
        <ul>
          {categories.map((category) => (
            <CreateList
              onChange={ this.handleSelectedCategory }
              key={ category.id }
              name={ category.name }
              id={ category.id }
            />
          ))}
        </ul>
        <ListItems items={ filtredItems } />
      </div>
    );
  }
}

export default CategoryList;
