import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      category: '',
    };
  }

  setSearch = (search) => {
    this.setState({
      search,
    });
  }

  setCategory = (category) => {
    this.setState({
      category,
    });
  }

  clearSearch = () => {
    this.setState({
      search: '',
      category: '',
    });
  }

  render() {
    const { category, search } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <HomePage
                  { ...props }
                  setCategory={ this.setCategory }
                  setSearch={ this.setSearch }
                />) }
            />
            <Route path="/cart" component={ Cart } />
            <Route
              path="/:id"
              render={ (props) => (
                <ProductDetails
                  { ...props }
                  category={ category }
                  search={ search }
                  clearSearch={ this.clearSearch }
                />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
