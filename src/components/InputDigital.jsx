import React from 'react';


class InputDigital extends React.Component {
  constructor() {
    super();

    this.state = {
      queryValue: '',
    }

    this.searchValue = this.searchValue.bind(this);
  }

  searchValue(event) {
    this.setState({
      queryValue: event.target.value,
    });
  }

  render() {
    const { queryValue } = this.state;
    const { pegandoDaApi } = this.props;
   
    return (
      <form>
        <input
          type="text"
          data-testid="query-input"
          value={ queryValue }
          onChange= { this.searchValue }
        />        
        
        <button
          data-testid="query-button"
          onClick={ (event) => {
            pegandoDaApi(queryValue);
            event.preventDefault();
          } }
        >
          Pesquisar
        </button>

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </form>
    );
  }
}

export default InputDigital;
