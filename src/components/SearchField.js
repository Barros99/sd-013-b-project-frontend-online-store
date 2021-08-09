import React from 'react';
import ListaPro from '../Components/ListaPro';

class SearchField extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ListaPro />
      </div>
    );
  }
}

export default SearchField;
