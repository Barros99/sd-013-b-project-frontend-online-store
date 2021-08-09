/* import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
*/

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import * as api from './services/api';

export default class App extends Component {
  componentDidMount() {
    api.getCategories()
      .then((data) => console.log(data));

    api.getProductsFromCategoryAndQuery('MLB5672', 'computador')
      .then((data) => console.log(data));
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ MainPage } />
      </BrowserRouter>
    );
  }
}
