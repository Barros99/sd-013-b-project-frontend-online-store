import React, { Component } from 'react';
import * as api from '../services/api';
import Item from './item';

export default class Itens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const fetchApi = await api.getProductsFromCategoryAndQuery();
    this.setState({
      loading: false,
      itens: fetchApi,
    });
  }

  render() {
    const { itens: { results }, loading } = this.state;
    if (loading) return <h4>Loading</h4>;
    return (
      <div className ="itens">
        {results.map((item) =>  <Item item={ item } />)}
      </div>
    );
  }
}