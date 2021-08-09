import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { change, search } = this.props;

    return (
      <div>
        <input
          type="text"
          onChange={ change }
          data-testid="query-input"
        />

        <button
          type="button"
          data-testid="query-button"
          onClick={ search }
        >
          Search
        </button>

        <Link
          to="/cart"
          data-testid="shopping-cart-button"
        >
          <img
            src="https://i.pinimg.com/originals/4b/a7/d8/4ba7d8d3c62e961494a50de2f61b2cc8.jpg"
            alt="Shopping Cart"
            height="60px"
          />
        </Link>

      </div>
    );
  }
}

Header.propTypes = {
  change: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default Header;
