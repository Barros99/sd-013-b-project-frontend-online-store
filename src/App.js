import React from 'react';
import Home from './pages/Home';
import * as api from './services/api';
import './App.css';

function App() {
  api.getCategories().then((data) => console.log(data));
  api.getProductsFromCategoryAndQuery().then((data) => console.log(data.results));
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
