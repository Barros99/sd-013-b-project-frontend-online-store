import React from 'react';
import './App.css';
import Categories from './components/Categories';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Categories />
        <div>
          <label htmlFor="input-search" data-testid="home-initial-message">
            <input type="text" name="search" id="input-search" />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </div>
      </div>
    );
  }
}

export default App;
