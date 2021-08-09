import React from 'react';
import PropTypes from 'prop-types';
import CardRender from './CardRender';
import * as api from '../services/api';

export default class CardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: undefined,
      category: undefined,
      results: [],
    };

    this.fetchData = this.fetchData.bind(this);
    this.onCategory = this.onCategory.bind(this);
    this.onSearchText = this.onSearchText.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  onSearchText({ target }) {
    this.setState({ searchText: target.value });
  }

  onCategory({ target }) {
    this.setState({ category: target.value });
  }

  async fetchData() {
    const data = await api.getProductsFromCategoryAndQuery(undefined, 'computador');
    this.setState({
      results: data.results,
    });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        { results.map((item) => <CardRender key={ item.id } results={ item } />)}
      </div>
    );
  }
}

CardList.propTypes = {};
