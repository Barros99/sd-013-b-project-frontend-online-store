import React from 'react';
import ListaCat from '../Components/ListaCat';

class SearchField extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ListaCat />
      </div>
    );
  }
}

export default SearchField;
