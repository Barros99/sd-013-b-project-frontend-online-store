import React, { Component } from 'react';
import CategoriesList from './Components/CategoriesList';
import SearchBar from './Components/SearchBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <SearchBar />
        </header>
        <div>
          <CategoriesList />
        </div>
      </div>
    );
  }
}
