import React from 'react';
import * as api from './services/api';

function App() {
  return (
    <div>
      { api.getProductsFromCategoryAndQuery('MLB5672', 'Acessórios') }
    </div>
  );
}

export default App;
