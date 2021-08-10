import React from 'react';
import PropTypes from 'prop-types';

class ListItems extends React.Component {
  render() {
    const { items, onClick } = this.props;
    return (
      <div
        data-testid="product-detail-link"
        onClick={ onClick }
        aria-hidden="true"
      >
        { items.length === 0 ? 'Nenhum produto foi encontrado'
          : items.map(({ thumbnail, price, title, id }) => (
            <div data-testid="product" key={ id }>
              <h3>{ title }</h3>
              <img src={ thumbnail } alt="Produto" />
              <p>{ `R$: ${price}` }</p>
            </div>
          ))}
      </div>
    );
  }
}

ListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListItems;
