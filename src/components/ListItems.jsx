import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListItems extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        { items.length === 0 ? 'Nenhum produto foi encontrado'
          : items.map(({ thumbnail, price, title, id }) => (
            <div data-testid="product-detail-link" key={ id }>
              <Link to={ `/product-details/${title}` }>
                <div data-testid="product">
                  <h3>{ title }</h3>
                  <img src={ thumbnail } alt="Produto" />
                  <p>{ `R$: ${price}` }</p>
                </div>
              </Link>
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
