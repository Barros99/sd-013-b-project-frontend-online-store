import React from 'react';
import RenderProducts from './RenderProducts';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState(() => ({
      query: target.value,
    }));
  }

  render() {
    const { query } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          value={ query }
          onChange={ this.handleChange }
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ () => <RenderProducts query={ query } /> }
        >
          Pesquisar
        </button>
        {/* <div>
          { submit ? <RenderProducts query={ query } /> : noReturn }
        </div> */}
      </div>
    );
  }
}

export default SearchBar;
