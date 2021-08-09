import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductList from './Components/ProductList';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" />
        <ProductList />
      </BrowserRouter>
    );
  }
}
