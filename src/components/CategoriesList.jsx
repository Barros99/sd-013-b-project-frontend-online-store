import React from 'react';
import PropTypes from 'prop-types';

export default class CategoriesList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {
          categories.map((categorie) => (
            <li key={ categorie.id } data-testid="category">
              { categorie.name }
            </li>
          ))
        }
      </ul>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
