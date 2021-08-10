import React from 'react';
import * as api from '../services/api';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = (
      { categories:[] }
    );
  }

  componentDidMount() {
    this.getCategoriesApi();
  }

  async getCategoriesApi() {
    const list = await api.getCategories();
    this.setState({
      categories : list,
    })
  }
  render() {
    return (
      <div>q</div>
    );
  }
}

export default ProductList;
