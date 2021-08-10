import React from 'react';
import { getCategories } from '../services/api';
import Categories from './Categories';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selected: undefined,
    };

    this.captureValue = this.captureValue.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  captureValue(event) {
    this.setState({ selected: event.target.value });
  }

  async fetchData() {
    const data = await getCategories();
    this.setState({ categories: data });
  }

  render() {
    const { categories } = this.state;
    return (
      <form onChange={ this.captureValue }>
        {
          categories.map((category) => (
            <Categories key={ category.id } categories={ category } />
          ))
        }
      </form>
    );
  }
}
