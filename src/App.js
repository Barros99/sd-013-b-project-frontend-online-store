import React from 'react';
import './App.css';
import Home from './pages/Home';
import ListCategories from './componentes/ListCategories';

function App() {
  return (
    <div>
      {/* { api.getCategories().then((categories) => console.log(categories)  )} */}
      <ListCategories />
      <Home />
    </div>
  );
}

export default App;
