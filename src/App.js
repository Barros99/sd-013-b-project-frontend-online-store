import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route to="/" component={ ProductList } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
