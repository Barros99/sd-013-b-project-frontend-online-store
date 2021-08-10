import React from 'react';
// import { Link } from 'react-router-dom';
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
    this.handleCardClick = this.handleCardClick.bind(this);
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

  handleCardClick({ target }) {
    const { searchItemList } = this.state;
    console.log(searchItemList.filter((item) => item.id === target));
  }

  render() {
    const { value, searchItemList } = this.state;
    return (
      <>
        <SearchBar
          value={ value }
          onChange={ this.handleChange }
          handleClick={ this.handleClick }
        />
        <ListItems onClick={ this.handleCardClick } items={ searchItemList } />
      </>
    );
  }
}

export default Main;
