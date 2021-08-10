import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Cart from './Components/Cart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
    };
    this.getItemCard = this.getItemCard.bind(this);
  }

  getItemCard(newItem) {
    this.setState({
      card: [...newItem],
    });
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
              render={
                () => <Home getItemCard={ this.getItemCard } />
              }
            />
            <Route
              path="/cart"
              component={ () => (<Cart card={ card } />) }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
