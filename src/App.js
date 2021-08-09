import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Message from './Components/Message';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route patch="/" component={ Message } />
      </BrowserRouter>
    </div>
  );
}

export default App;
