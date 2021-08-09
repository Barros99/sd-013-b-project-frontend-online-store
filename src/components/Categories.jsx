import React from 'react';
// import api from '../services/api';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const dataCategories = await api.getCategories();
    this.setState({
      categories: dataCategories,
    });
    // console.log(dataCategories);
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        {categories.map((categorie) => (
          <label
            htmlFor={ `categorie${categorie.id}` }
            data-testid="category"
            key={ categorie.id }
          >
            <input type="radio" id={ `categorie${categorie.id}` } name="categorie" />
            { categorie.name }
            <br />
          </label>
        ))}
      </div>
    );
  }
}

export default Categories;
