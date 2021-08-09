import React from 'react';
import SearchBar from './pages/SearchBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={ SearchBar }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
