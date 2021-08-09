import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ SearchBar } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
