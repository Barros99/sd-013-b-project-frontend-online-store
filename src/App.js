import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
import CardLibrary from './components/CardLibrary';
=======
import SearchBar from './components/SearchBar';
import Cart from './pages/Cart';

>>>>>>> 0c50130908035f5facc4e19fc867d9918ae69494

=======
import Homepage from './pages/Homepage';
import Cart from './pages/Cart';

>>>>>>> a2cfdd9c59884d97d197e759998da8c529be2f67
function App() {
  return (
    <div>
<<<<<<< HEAD
      <CardLibrary />
=======
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route exact path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
>>>>>>> 0c50130908035f5facc4e19fc867d9918ae69494
    </div>
  );
}

export default App;
