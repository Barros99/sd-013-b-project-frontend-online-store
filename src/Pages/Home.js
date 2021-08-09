import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search-input">
          <input type="text" id="search-input" />
        </label>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h1>
      </div>
    );
  }
}

export default Home;
