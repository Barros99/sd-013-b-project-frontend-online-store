import React, { Component } from 'react';
import ProductList from '../ProductList';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      catId: 'veiculo',
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    
    this.setState({
        [name]: value,
      });
    } 

  render() {
    const { input, catId } = this.state;

    return (
      <>
        <input type="text" placeholder="Digite o nome do produto" onChange={ this.handleChange } name="input" />
        <button type="button">Buscar</button>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <section>
          <ProductList query={ input } catId={ catId } />
        </section>
      </>
    );
  }
}

export default Home;
