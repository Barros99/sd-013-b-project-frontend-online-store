import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainScreen from './Pages/MainScreen';
import ShoppCart from './Pages/ShoppCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MainScreen } />
          <Route path="/ShoppCart" component={ ShoppCart } />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
