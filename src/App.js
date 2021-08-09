import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Router } from 'react-router';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Router path="/" component={ Search } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
