import React from 'react';

class SearchField extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default SearchField;
