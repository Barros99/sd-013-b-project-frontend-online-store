import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class BarSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlebtn = this.handlebtn.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async handlebtn() {
    const { searchText } = this.state;
    const items = await getProductsFromCategoryAndQuery(undefined, searchText)
      .then((result) => result.results);
    this.setState({ products: items });
  }

  render() {
    const { searchText } = this.state;
    return (
      <form>
        <input
          type="text"
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
          data-testid="query-input"
          name="searchText"
          value={ searchText }
          onChange={ this.handleChange }
        />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input type="button" name="" onClick={ this.handlebtn } />
      </form>
    );
  }
}

export default BarSearch;
