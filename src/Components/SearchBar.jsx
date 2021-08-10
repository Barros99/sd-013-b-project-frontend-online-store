import React from 'react';
import Products from './Products';
import * as api from '../services/api';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      productList: [],
      loading: false,
      isClicked: false,
    };
    this.handleList = this.handleList.bind(this);
  }

 valueInput = ({ target }) => {
   this.setState({
     input: target.value,
   });
 }

 handleList = async () => {
   const { input } = this.state;
   this.setState({ loading: true }, async () => {
     const { results } = await api.getProductsFromCategoryAndQuery('all', input);
     this.setState({
       productList: results,
       loading: false,
       isClicked: true,
     });
   });
 }

 render() {
   const { productList, loading, isClicked } = this.state;
   if (loading) return (<p>Carregando...</p>);
   return (
     <div>
       <input
         data-testid="query-input"
         type="text"
         onChange={ (e) => this.valueInput(e) }
       />
       <button data-testid="query-button" type="button" onClick={ this.handleList }>
         Pesquisar
       </button>
       <p data-testid="home-initial-message">
         Digite algum termo de pesquisa ou escolha uma categoria.
       </p>
       <Products products={ productList } isClicked={ isClicked } />
     </div>
   );
 }
}


import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { handleChange, searchText } = this.props;
    return (
      <section>
        <label htmlFor="category" data-testid="home-initial-message">
          <h4>
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h4>
          <input
            type="text"
            name="searchText"
            id="category"
            value={ searchText }
            onChange={ handleChange }
          />
        </label>
      </section>
    );
  }
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};


export default SearchBar;
