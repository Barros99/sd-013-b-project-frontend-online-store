import React, { Component } from 'react';
import Header from '../Components/Header';

class Initial extends Component {
  render() {
    return (
      <div>
        <Header />

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

      </div>
    );
  }
}

export default Initial;
