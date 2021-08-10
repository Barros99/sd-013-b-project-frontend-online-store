import React, { Component } from 'react';
import ProductList from './ProductList';
import PropTypes from 'prop-types';

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onSearchText } = this.props;
    const { searchField } = this.state;
    onSearchText(searchField)
  }

  render() {
    const { searchField, products } = this.state;
    return (
      <div>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
        <input
          data-testid="query-input"
          type="text"
          name="searchField"
          value={ searchField }
          onChange={ this.handleChange }
          placeholder="Ex: produto xxx"
        />
      </div>
    );
  }
}

SearchField.propTypes = {
  onSearchText: PropTypes.func.isRequired,
};

export default SearchField;
