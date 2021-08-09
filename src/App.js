import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainScreen from './components/MainScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainScreen />
      </div>
    </BrowserRouter>

  );
}

export default App;
