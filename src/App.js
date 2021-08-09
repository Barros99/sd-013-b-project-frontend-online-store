import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBar';
import Home from './Components/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
        <SearchBar />
      </div>
    );
  }
}

export default App;
