import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import SearchField from './components/SearchField';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ SearchField } />
      </BrowserRouter>
    );
  }
}

export default App;
