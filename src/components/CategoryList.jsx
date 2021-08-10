import React from 'react';
import * as api from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryState: [],
    };
  }

  componentDidMount() {
    this.fetchApi();
  }

  async fetchApi() {
    const categoriesApi = await api.getCategories();
    this.setState({
      categoryState: categoriesApi,
    });
  }

  render() {
    const { categoryState } = this.state;
    return (
      <div>
        <section>
          <ul>
            {categoryState.map((category) => (
              <li data-testid="category" key={ category.id }>
                {category.name}
              </li>))}
          </ul>
        </section>
      </div>
    );
  }
}

export default CategoryList;
