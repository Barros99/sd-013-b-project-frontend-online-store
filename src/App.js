import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCategories } from './services/api';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categoriesList: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    console.log(categories);
    this.setState({
      categoriesList: categories,
    });
  }

  render() {
    const { categoriesList } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/shoppingcart" component={ ShoppingCart } />
          </Switch>
          <div>
            <ul>
              {categoriesList.map((category) => (
                <li data-testid="category" key={ category.id }>
                  { category.name }
                </li>
              ))}
            </ul>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
