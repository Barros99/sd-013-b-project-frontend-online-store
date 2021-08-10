import React from 'react';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((response) => {
      this.setState({
        categories: response,
      });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="container-ul">
        <ul>
          {categories.length !== 0
            && categories.map((category) => (
              <li
                data-testid="category"
                key={ category.id }
              >
                { category.name }
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default CategoriesList;
