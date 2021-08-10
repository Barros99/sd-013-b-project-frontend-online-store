import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import Categories from './Categories';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selected: undefined,
    };

<<<<<<< HEAD
    this.fetchData = this.fetchData.bind(this);
=======
    this.captureValue = this.captureValue.bind(this);
>>>>>>> 0c50130908035f5facc4e19fc867d9918ae69494
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
    const { captureValueSelect } = this.props;
    return (
<<<<<<< HEAD
      <form onChange={ captureValueSelect }>
=======
      <form onChange={ this.captureValue }>
>>>>>>> 0c50130908035f5facc4e19fc867d9918ae69494
        {
          categories.map((category) => (
            <Categories key={ category.id } categories={ category } />
          ))
        }
      </form>
    );
  }
}

Sidebar.propTypes = {
  captureValueSelect: PropTypes.func.isRequired,
};
