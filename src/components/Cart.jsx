import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  constructor() {
    super();

    this.renderList = this.renderList.bind(this);

    this.state = {
      empty: true,
      list: [],
    };
  }

  renderEmpty() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }

  renderList() {
    const { list } = this.state;
    return (
      <div>
        <Link to="/">Voltar</Link>
        { list.map((item) => (
          <li key={ item.id }>
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
        { this.renderList() }
      </section>
    );
  }
}
