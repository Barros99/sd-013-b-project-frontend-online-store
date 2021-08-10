import React, { Component } from 'react';
import Categories from './Categories';
import Itens from './itens';

export default class Body extends Component {
  render() {
    return (
      <section className="Body">
        <div className="sideBar"><Categories /></div>
        <div className="productArea"><Itens /></div>
      </section>
    );
  }
}
