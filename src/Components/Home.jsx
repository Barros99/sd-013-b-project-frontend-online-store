import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarSearch from './BarSearch';
import Category from './Category';

class Home extends Component {
  render() {
    return (
      <main>
        <BarSearch />
<<<<<<< HEAD:src/Components/RenderApp.jsx
        <Category />
=======
        <Link data-testid="shopping-cart-button" to="cart/">Cart</Link>
>>>>>>> main-group-16-requirement-3:src/Components/Home.jsx
      </main>
    );
  }
}

export default Home;
