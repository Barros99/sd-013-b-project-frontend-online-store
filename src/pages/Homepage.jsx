import React from 'react';
import Cards from '../components/Cards';
import SearchBar from '../components/SearchBar';
import Sidebar from '../components/Sidebar';

export default class Homepage extends React.Component {
  render() {
    return (
      <section>
        <SearchBar />
        <Sidebar />
        <Cards />
      </section>
    );
  }
}
