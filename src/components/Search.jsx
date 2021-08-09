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
          <label htmlFor="home-initial-message">
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
