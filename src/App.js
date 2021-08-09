import React from 'react';
import './App.css';
import * as api from './services/api';

function App() {
  return (
    <div>
      {api.getCategories().then((categories) => { console.log(categories); })}
    </div>
  );
}

export default App;
