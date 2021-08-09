import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchBar from './pages/SearchBar';
import './App.css';
import HomeFilter from './Componentes/HomeFilter';

function App() {
  return (
    <div>
      <HomeFilter />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ SearchBar }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
