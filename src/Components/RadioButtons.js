import React from 'react';
import { getCategories } from '../services/api';
// import CategoryRadios from './ScreensComponents/CategoryRadios';

class CategoryList extends React.Component {
  render() {
    const { categories, handleSelect } = this.props;
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
