import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BarSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { searchText } = this.state;
    const { getProducts } = this.props;

    getProducts(searchText);
  }

  render() {
    const { searchText } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="text"
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
          data-testid="query-input"
          name="searchText"
          value={ searchText }
          onChange={ this.handleChange }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button data-testid="query-button" type="submit">🔎</button>
      </form>
    );
  }
}

BarSearch.propTypes = {
  getProducts: PropTypes.func.isRequired,
};

export default BarSearch;
