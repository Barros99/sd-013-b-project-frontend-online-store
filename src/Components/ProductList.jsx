import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListaDeProdutos extends Component {
  render() {
    const { produtos } = this.props;
    const { title, thumbnail, price } = produtos;
    return (

      <div>
        <span>{ title }</span>
        <img>{ thumbnail }</img>
        <span>{ price }</span>
      </div>
    );
  }
}
