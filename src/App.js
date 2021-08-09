import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => <Home /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
