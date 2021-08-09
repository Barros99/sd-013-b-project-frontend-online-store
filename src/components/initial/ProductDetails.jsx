import React, {Component} from 'react';
import * as api from '/home/rafael/Área de Trabalho/Projetos Trybe/Projetos Front-End-Trybe/sd-013-b-project-frontend-online-store/src/services'

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      categories:[],
      idAndQuery:[],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const returnApiCategories = await api.getCategories();
    this.setState({categories: returnApiCategories});
  }

  render() {
    return (
      <div>
        <h1>teste</h1>
      </div>
    );
  }
}

export default ProductDetails;