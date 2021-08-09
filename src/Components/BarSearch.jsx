import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BarSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { searchText } = this.state;
    const { getProducts } = this.props;
    return (
      <form>
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
        <input
          data-testid="query-button"
          type="button"
          name=""
          onClick={ () => getProducts(searchText) }
        />
      </form>
    );
  }
}

BarSearch.propTypes = {
  getProducts: PropTypes.func.isRequired,
};

export default BarSearch;
