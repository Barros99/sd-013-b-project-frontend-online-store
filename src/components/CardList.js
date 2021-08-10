import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
// import * as api from '../services/api';

class CardList extends React.Component {
  renderCardList() {
    const { products } = this.props;
    return products.map((product) => (
      <Card
        product={ product }
        key={ product.id }
      />
    ));
  }

  render() {
    return (
      <div>
        {this.renderCardList()}
      </div>
    );
  }
}

CardList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
