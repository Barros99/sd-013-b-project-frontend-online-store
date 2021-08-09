import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma
          categoria.
        </h3>
      </div>
    );
  }
}

export default App;
