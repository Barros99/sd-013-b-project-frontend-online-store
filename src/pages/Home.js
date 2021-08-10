import React from 'react';
import InputDigital from '../components/InputDigital';
import ProductList from '../components/ProductList';
import * as api from './../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      resultadoQuery: [],
      message: false,
    }
    
    this.pegandoDaApi = this.pegandoDaApi.bind(this);
  }

  pegandoDaApi(query) {
    // api.getProductsFromCategoryAndQuery(null, query).then(results => {console.log(results.results)});
    // pesquisa apenas pela QUERY
    api.getProductsFromCategoryAndQuery(null, query)
    .then(results => {
      this.setState({
        resultadoQuery: results.results,
        message: true,
      });
    });
  }

  render() {    
    const { resultadoQuery, message } = this.state;

    return (
      <div>
        <InputDigital pegandoDaApi={ this.pegandoDaApi } />

        { 
          resultadoQuery.length === 0 && message === true ? 'Produto não encontrado' :
          resultadoQuery.map(({ id, title, price, thumbnail }) => {
            return (<ProductList key={ id } title={ title } price={ price } thumbnail={ thumbnail } />);
          })
        }
      </div>
    );
  }
}

export default Home;
