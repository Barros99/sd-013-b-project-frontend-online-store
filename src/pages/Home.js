import React from 'react';
import Categories from '../components/Categories';
import InputDigital from './InputDigital';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Categories />
        <InputDigital />
      </div>
    );
  }
}

export default Home;
