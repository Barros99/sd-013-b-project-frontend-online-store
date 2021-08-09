import React, { Component } from 'react';
import BarSearch from './BarSearch';
import Category from './Category';

class RenderApp extends Component {
  render() {
    return (
      <main>
        <BarSearch />
        <Category />
      </main>
    );
  }
}
export default RenderApp;
