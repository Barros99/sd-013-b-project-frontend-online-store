import React from 'react';
import PropTypes from 'prop-types';

export default class CategoriesList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {
          categories.map((categorie) => (
            <div key={ categorie.id }>
              <label htmlFor={ categorie.id }>
                <input id={ categorie.id } type="radio" data-testid="category" />
                { categorie.name }
              </label>
            </div>
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
