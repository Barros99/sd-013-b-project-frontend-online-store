import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <form>
        <fieldset>
          <label data-testid="home-initial-message" htmlFor="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              placeholder="Digite algum termo"
              type="text"
            />
          </label>
        </fieldset>
      </form>
    );
  }
}

export default Search;
