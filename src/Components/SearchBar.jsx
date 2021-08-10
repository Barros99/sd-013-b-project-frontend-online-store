import React from 'react';
import PropTypes from 'prop-types';
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
   const { handleChange, searchText } = this.props;
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
       {console.log(handleChange, searchText)}
     </div>
   );
 }
}

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBar;
