import React from 'react';
import Search from './Search';
import ProductCard from './ProductCard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-div">
        <Search />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <ProductCard />
      </div>
    );
  }
}

export default Home;
