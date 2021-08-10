import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class ListaCat extends React.Component {
  constructor() {
    super();

    this.category = this.category.bind(this);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.category();
  }

  async category() {
    const acessandoCat = await getCategories();
    this.setState({
      categories: acessandoCat,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          { categories.map((categorie) => (
            <li
              data-testid="category"
              key={ categorie.name }
            >
              { categorie.name }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ListaCat.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default ListaCat;
