import React from 'react';
import CardList from './CardList';
import SearchBar from './SearchBar';

export default class CardLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: undefined,
      category: undefined,
    };

    this.onSearchText = this.onSearchText.bind(this);
    this.onCategory = this.onCategory.bind(this);
  }

  onSearchText({ target }) {
    this.setState({ searchText: target.value });
  }

  onCategory({ target }) {
    this.setState({ category: target.checked });
  }

  render() {
    const { searchText, category } = this.state;
    return (
      <div>
        <SearchBar searchText={ searchText } category={ category } />
        <CardList searchText={ searchText } category={ category } />
      </div>
    );
  }
}
