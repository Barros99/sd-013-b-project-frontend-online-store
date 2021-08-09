import React from 'react';
import logo from './logo.svg';
import * as api from './services/api';
import './App.css';

function App() {
  api.getCategories().then((data) => console.log(data));
  api.getProductsFromCategoryAndQuery().then((data) => console.log(data.results));
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
