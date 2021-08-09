import React from 'react';

class InputDigital extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <from>
        <input type="text" ></input>
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </from>
    );
  }
}

export default InputDigital;