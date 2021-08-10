import React from 'react';
import { Link } from 'react-router-dom';
import RadioButtons from '../Components/RadioButtons';
import { getCategories } from '../services/api';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };

    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const getResponse = await getCategories();
    this.setState({
      categories: getResponse,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div data-testid="home-initial-message">
        <label htmlFor="searchBar">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
          <input
            type="text"
            name="searchBar"
          />
        </label>
        <Link
          to="/ShoppCart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <div>
          {/* <ProductList products={ products } /> */}
        </div>
        <RadioButtons categories={ categories } handleSelect={ handleSelect } />
      </div>
    );
  }
}

export default MainScreen;
