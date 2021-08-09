import React, { Component } from 'react';
import * as api from './services/api';
import './App.css';

class App extends Component {
  componentDidMount() {
    api.getCategories();
  }

  render() {
    return (
      <div className="App">
        <p>Iniciando o projeto</p>
      </div>
    );
  }
}

export default App;
