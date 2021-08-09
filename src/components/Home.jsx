import React from 'react';
import Search from './Search';
import logo from '../images/shopping-cart-svgrepo-com.svg';
import { Link } from 'react-router-dom';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <Search />
        <Link to="/cart"> <img src={logo} alt="cart icon" width="50" height="50" /> </Link>
      </section>
    );
  }
}

export default Home;
