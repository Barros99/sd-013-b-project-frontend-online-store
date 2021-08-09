import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './services/api';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
{/*         <button
          onClick={ api.getProductsFromCategoryAndQuery }
        >
          A
        </button> */}
      </header>
    </div>
  );
}

export default App;
