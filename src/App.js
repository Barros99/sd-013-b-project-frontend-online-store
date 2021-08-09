import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<SearchBar />) }
          />
          {/* <Route path="/" render={ () => <RenderCard products={ products } /> } /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
