import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class ListaPro extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
    this.categoria = this.categoria.bind(this);
  }

  componentDidMount() {
    this.categoria();
  }

  async categoria() {
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

ListaPro.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default ListaPro;
