import React, { Component } from 'react';
import * as api from '../services/api';

export default class CategoryList extends Component {
  render() {
    return (
      <div>
        <section>
          {api.getCategories().map({}))}
        </section>
      </div>
    );
  }
}
