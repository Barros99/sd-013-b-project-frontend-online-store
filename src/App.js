import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render() {
    return(
      <div>
        <p data-testid="home-initial-message">"Digite algum termo de pesquisa ou escolha uma categoria."</p>
      </div>
    )
  }
}

export default App;
