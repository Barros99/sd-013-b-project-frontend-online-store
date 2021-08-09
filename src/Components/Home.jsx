import React from 'react';
import { getCategories } from '../services/api';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      
    };
  }

  componentDidMount = () => {
    getCategories();
  }

  render() {
    return (
      <h1>hello</h1>
    );
  }
}