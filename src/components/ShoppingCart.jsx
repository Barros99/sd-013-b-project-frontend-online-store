import React, { Component } from 'react';
import Empty from './Empty';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // products: [],
      isEmpty: true,
    };
  }

  render() {
    const { isEmpty } = this.state;
    return (
      <div>
        {isEmpty && <Empty />}
      </div>
    );
  }
}

export default ShoppingCart;
