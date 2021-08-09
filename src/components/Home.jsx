import React from 'react';
import Search from './Search';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Search />
    );
  }
}

export default Home;
