import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Initial from './Pages/Initial';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Initial } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
