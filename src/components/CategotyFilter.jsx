// import React from 'react';
// import CategoryList from './CategoryList';
// import * as api from '../services/api';

// class CategoryFilter extends React.Component {

//   constructor() {
//     super();
//     this.clickFilter = this.clickFilter.bind(this);
//   }

//   clickFilter({ target: { name, id } }) {
//     const { getState } = this.props;
//     getState(name, id);
//   }

//   render() {
//     return (
//       <div>
//         {categoryList.map((item) => {
//           <Link
//             to="/search"
//             key={ item.id }
//             data-testid="category"
//             name="category"
//             onClick={ this.clickFilter }
//             id="category"
//           >
//             {item.name}
//             </Link>
//           }
//       )}
//       </div>
//     );
//   }
// }
// export default CategoryFilter;
