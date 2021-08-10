import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import CardLibrary from './components/CardLibrary';
=======
import SearchBar from './components/SearchBar';
import Cart from './pages/Cart';

>>>>>>> 0c50130908035f5facc4e19fc867d9918ae69494

function App() {
  return (
    <div>
<<<<<<< HEAD
      <CardLibrary />
=======
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SearchBar } />
          <Route exact path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
>>>>>>> 0c50130908035f5facc4e19fc867d9918ae69494
    </div>
  );
}

export default App;
