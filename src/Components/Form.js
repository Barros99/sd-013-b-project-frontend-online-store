import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="text-input">
          <textarea
            data-testid="product-detail-evaluation"
            id="text-input"
            value={ review }
            onChange={ this.handleChangeReview }
          />
        </label>
      </form>
    );
  }
}

export default Form;
