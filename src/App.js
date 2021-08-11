import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { card: [] };
    this.getCardItem = this.getCardItem.bind(this);
  }

  getCardItem(newCard) {
    this.setState({ card: newCard });
  }

  render() {
    const { card } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (
                <Home getCardItem={ this.getCardItem } />
              ) }
            />
            <Route
              path="/cart"
              render={ () => (
                <Cart card={ card } />
              ) }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
