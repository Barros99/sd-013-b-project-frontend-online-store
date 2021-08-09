import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    const { searchText, category } = this.props;
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
