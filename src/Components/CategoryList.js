import { render } from '@testing-library/react';
import React from 'react';
import { getCategories } from '../services/api';
import CategoryRadios from './ScreensComponents/CategoryRadios';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      categories: [],
    };

    this.fecthAPI = this.fecthAPI.bind(this);
  }

  componentDidMount() {
    this.fecthAPI();
  }

  async fecthAPI() {
    const getResponse = await getCategories();
    this.setState({
      categories: getResponse,
      loading: true,
    });
  }

  render() {
    const { categories, loading } = this.state;
    console.log(categories);
    return (
      <form>
        { categories.map((category, index) => (
          <div key={ index }>
            <input
              type="radio"
              key={ category.id }
              name="radio"
              id={ category.id }
              data-testid="category"
            />
            <label htmlFor={ category.id }>
              { category.name }
            </label>
          </div>
        )) }
      </form>

    );
  }
}
export default CategoryList;
