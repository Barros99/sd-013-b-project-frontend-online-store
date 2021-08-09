import React from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends React.Component {
  constructor() {
    super();

    this.state = { empty: true };
  }

  renderEmpty() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }

  renderList() {
    this.setState({ empty: false });
    const { list } = this.state;
    return (
      <div>
        <Link to="/">Voltar</Link>
        { list.map((item) => (
          <li>
            { item.title }
          </li>
        )) }
      </div>
    );
  }

  render() {
    const { empty } = this.state;
    return (
      <section>
        { (empty && this.renderEmpty()) }
        { this.renderLisy() }
      </section>
    );
  }
}