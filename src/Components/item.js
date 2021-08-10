import React, { Component } from 'react';

export default class Itens extends Component {
  render() {
    const { item: { title, thumbnail, price } } = this.props;
    return (
      <div className="item">
        <div className="divImg">
          <img src={ thumbnail } alt={ `Imagem do item ${title}` } style={{ width: '150px' } } />
        </div>
        <p>{ title }</p>
        <hr />
        <p> PRICE: { price }</p>
      </div>
    );
  }
}