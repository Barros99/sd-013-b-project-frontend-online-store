// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import ProductList from './ProductList';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
    };
  }

  handleChange = (event) => {
    this.setState({ filterText: event.target.value });
  }

  render() {
    const { filterText } = this.state;
    // const { text } = this.props;
    return (
      <div className="App">
        <label htmlFor="input-search" data-testid="home-initial-message">
          <input
            type="text"
            name="search"
            id="input-search"
            value={ filterText }
            onChange={ this.handleChange }
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
          <button type="button">pesquisar</button>
          <br />
          {/* <FontAwesomeIcon to="/shoppingcart" icon="fa-solid fa-cart-shopping" /> */}
          <Link data-testid="shopping-cart-button" to="/shoppingcart">Carrinho</Link>
          <Categories />
          <ProductList text={ filterText } />
        </label>
      </div>
    );
  }
}

export default Home;
