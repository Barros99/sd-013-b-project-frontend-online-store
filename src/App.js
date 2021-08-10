import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';


class App extends React.Component {
  render() {
    return (
      <main>
        <div className="App">
          <BrowserRouter>
            <Home />
              <Switch>
                <Route exact path="/shopping-cart" component={ ShoppingCart } />
              </Switch>
          </BrowserRouter>
        </div>

        <div>
          <h3 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma
            categoria.
          </h3>
        </div>
      </main>


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  async componentDidMount() {
    await this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h3>
        <ul>
          {categories.map((categorie) => (
            <li
              key={ categorie.id }
              data-testid="category"
            >
              { categorie.name }
            </li>))}
        </ul>
      </div>
    );
  }
}

export default App;
