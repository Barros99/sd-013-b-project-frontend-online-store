import React from 'react';
import { getCategories } from '../services/api';

export default class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
    this.updateCategories = this.updateCategories.bind(this);
  }

  async componentDidMount() {
    const categoryList = await getCategories();
    this.updateCategories(categoryList);
  }

  updateCategories(categoryList) {
    this.setState({
      categories: [...categoryList],
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((category) => (<p key={ category.id }>{category.name}</p>))}
      </div>
    );
  }
}
