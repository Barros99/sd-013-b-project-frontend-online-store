import React from 'react';
import { getCategories } from '../services/api';
import Categories from './Categories';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const data = await getCategories();
    this.setState({ categories: data });
  }

  render() {
    const { categories } = this.state;
    return (
      <form>
        {
          categories.map((category) => (
            <Categories key={ category.id } categories={ category } />
          ))
        }
      </form>
    );
  }
}
