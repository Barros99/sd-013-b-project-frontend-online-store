import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        {categories}
      </div>
      // <form>
      //   { categories.map((category, index) => (
      //     <div key={ index }>
      //       <input
      //         type="radio"
      //         key={ category.id }
      //         name="radio"
      //         id={ category.id }
      //         data-testid="category"
      //       />
      //       <label htmlFor={ category.id }>
      //         { category.name }
      //       </label>
      //     </div>
      //   )) }
      // </form>

    );
  }
}
export default CategoryList;

CategoryList.propTypes = {
  categories: PropTypes.shape({}).isRequired,
};
