import React from 'react';
import CardItems from './CardItems';
import InputAndButton from './InputAndButton';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  async handleOnClick(param) {
    await getProductsFromCategoryAndQuery('', param).then((result) => {
      this.setState({ items: result.results });
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <InputAndButton func={ this.handleOnClick } />
        { items.length === 0 ? <h5>Nenhum produto foi encontrado</h5> : '' }
        { items
          .map((item) => (
            <CardItems key={ item.id } item={ item } />))}
      </div>
    );
  }
}
