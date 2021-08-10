import React from 'react';

export default class ProductList extends React.Component {
  render() {

    const { title, thumbnail, price  } = this.props;

    return(
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ thumbnail } />
        <p>{ price }</p>
      </div>
    );
  }
}