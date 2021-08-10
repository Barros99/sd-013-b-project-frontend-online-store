import React from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import * as api from '../services/api';

export default class CardLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.captureValueSelect = this.captureValueSelect.bind(this);

    this.state = {
      searchText: undefined,
      selectedCategory: undefined,
      results: [],
    };
  }

  componentDidMount() {

  }
  /*
  componentDidUpdate(prevs) {
    const { searchText, selectedCategory } = this.state;
    if (searchText !== prevs.searchText || selectedCategory !== prevs.selectedCategory) {
      this.fetchData(selectedCategory, searchText);
    }
  }
  */

  handleClick({ target }) {
    const { searchText, selectedCategory } = this.state;
    this.setState({ searchText: target.value }, () => {
      this.fetchData(searchText, selectedCategory);
    });
  }

  captureValueSelect({ target }) {
    const { searchText, selectedCategory } = this.state;
    this.setState({ selectedCategory: target.id });
    this.setState({ searchText: target.value }, () => {
      this.fetchData(searchText, selectedCategory);
    });
  }

  async fetchData() {
    const { searchText, selectedCategory } = this.state;
    const data = await api.getProductsFromCategoryAndQuery(selectedCategory, searchText);
    this.setState({
      results: data.results,
    });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <SearchBar getSearch={ this.handleClick } />
        <Sidebar captureValueSelect={ this.captureValueSelect } />
        <CardList results={ results } />
      </div>
    );
  }
}
