import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    const { thumbnail, title, price } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt="product" />
        <p>{ title }</p>
        <p>{ price }</p>
      </div>
    );
  }
}
