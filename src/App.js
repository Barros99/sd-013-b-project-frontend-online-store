import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductList from './PageList/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route patch="/" component={ ProductList } />
      </BrowserRouter>
    </div>
  );
}

export default App;
