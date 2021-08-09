import React, { Component } from 'react';

class BarSearch extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </form>
    );
  }
}

export default BarSearch;
