import React, { Component } from 'react';
import ProductList from '../ProductList';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      catId: '',
      input: '',
      send: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  submitQuery() {
    const { input } = this.state;
    this.setState({ send: input });
  }

  render() {
    const { catId, send } = this.state;

    return (
      <>
        <input
          type="text"
          placeholder="Digite o nome do produto"
          data-testid="query-input"
          onChange={ this.handleChange }
          name="input"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.submitQuery }
        >
          Buscar
        </button>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <section>
          <ProductList query={ send } catId={ catId } />
        </section>
      </>
    );
  }
}

export default Home;
