import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ListItems from './ListItems';
import SearchBar from './SearchBar';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchItemList: [],
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.categoryClick = this.categoryClick.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      value,
    });
  }

  async handleClick() {
    const { value, category } = this.state;
    const response = await getProductsFromCategoryAndQuery(category, value);
    this.setState({ searchItemList: response.results });
  }

  async categoryClick(event) {
    // console.log(event.target.value);
    await this.setState({
      category: event.target.value,
    });
    this.handleClick();
  }

  render() {
    const { value, searchItemList } = this.state;
    return (
      <>
        <SearchBar
          value={ value }
          onChange={ this.handleChange }
          handleClick={ this.handleClick }
          categoryClick={ this.categoryClick }
        />
        <ListItems items={ searchItemList } />
      </>
    );
  }
}

export default Main;
