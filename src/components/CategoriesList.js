import React from 'react';
import PropTypes from 'prop-types';

export default class CategoriesList extends React.Component {
  render() {
    const { categories, setCategory } = this.props;
    return (
      <div>
        {
          categories.map((categorie) => (
            <div key={ categorie.id }>
              <label htmlFor={ categorie.id }>
                <input
                  name="category"
                  id={ categorie.id }
                  type="radio"
                  data-testid="category"
                  onChange={ () => setCategory(categorie.id) }
                />
                { categorie.name }
              </label>
            </div>
          ))
        }
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  setCategory: PropTypes.func.isRequired,
};
