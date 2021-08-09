import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchBar from './components/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      value,
    });
  }

  render() {
    const { value } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={ () => <SearchBar value={ value } onChange={ this.handleChange } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
