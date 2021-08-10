import React from 'react';
import PropTypes from 'prop-types';
import FailResult from './FailResult';

export default class ProductList extends React.Component {
  render() {
    const { resultList } = this.props;
    console.log(resultList);
    if (resultList.length === 0) {
      return <FailResult />;
    }
    return (
      <div>
        { resultList.map((product) => (
          <div key={ product.id } data-testid="product">
            <h4>{ product.title }</h4>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{ product.price }</p>
          </div>
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  resultList: PropTypes.shape({
    map: PropTypes.func,
    length: PropTypes.number,
  }).isRequired,
};
