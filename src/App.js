import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import MainScreen from './components/MainScreen';
import ShoppCart from './components/ShoppCart';

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
