import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCategories } from './services/api';
import ShoppingCart from './components/ShoppingCart';
import CartButton from './components/CartButton';

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
            <Route exact path="/" component={ CartButton } />
            <Route exact path="/shoppingcart" component={ ShoppingCart } />
          </Switch>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <div>
            <ul>
              {categoriesList.map((category) => (
                <li data-testid="category" key={ category.id }>
                  { category.name }
                </li>
              ),
            )};
            </ul>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
