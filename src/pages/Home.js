import React from 'react';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default Home;
