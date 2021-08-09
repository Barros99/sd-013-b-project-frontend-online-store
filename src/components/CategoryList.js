import React from 'react';
import { getCategories } from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      categories: [],
    };
  }

  componentDidMount() {
    this.fecthAPI();
  }

  async fecthAPI() {
    const getResponse = await getCategories();
    this.setState({
      categories: getResponse,
      loading: !loading,
    });
  }

  render() {
    const { categories, loading } = this.state;
    return(
      
    )
  }
}

export default CategoryList;
