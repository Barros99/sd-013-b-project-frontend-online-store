import React from 'react';
import PropTypes from 'prop-types';

class ListItems extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        { items.map(({ thumbnail, price, title, id }) => (
          <div key={ id } data-testid="product">
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
};

export default ListItems;
