import React from 'react';

class MainScreen extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <label htmlFor="searchBar">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
          <input
            type="text"
            name="searchBar"
          />
        </label>

      </div>
    );
  }
}

export default MainScreen;
