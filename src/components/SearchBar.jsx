import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: undefined,
    };

    this.captureValue = this.captureValue.bind(this);
  }

  captureValue(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={ this.captureValue } />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
