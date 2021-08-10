import React from 'react';
import InputDigital from '../components/InputDigital';
import ProductList from '../components/ProductList';
import * as api from './../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      resultadoQuery: [],
    }
    
    this.pegandoDaApi = this.pegandoDaApi.bind(this);
  }

  pegandoDaApi(query) {
    // api.getProductsFromCategoryAndQuery(null, query).then(results => {console.log(results.results)});
    api.getProductsFromCategoryAndQuery(null, query).then(results => {
      this.setState({
        resultadoQuery: results.results,
      });
    });
  }

  render() {    
    const { resultadoQuery } = this.state;

    return (
      <div>
        <InputDigital pegandoDaApi={this.pegandoDaApi} />

        { 
          resultadoQuery.map(({ title, price, thumbnail }) => {
            return (<ProductList title={ title } price={ price } thumbnail={ thumbnail } />);
          }) 
        }
      </div>
    );
  }
}

export default Home;
