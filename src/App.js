import React from 'react';
import {
  getCategories,
} from './services/api';

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
