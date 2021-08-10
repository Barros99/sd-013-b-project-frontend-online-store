import React from 'react';
import './App.css';
import Home from './pages/Home';
// import * as api from './services/api';

function App() {
  return (
    <div>
      {/* {api.getCategories().then((categories) => { console.log(categories); })} */}
      <Home />
    </div>
  );
}

export default App;
