import React, { Component } from 'react';
import SearchBar from './Components/SearchBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <SearchBar />
        </header>
      </div>
    );
  }
}
