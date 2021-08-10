import React, { Component } from 'react';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      review: '',
      rating: 0,
    };
  }

  handleChangeReview = (event) => {
    this.setState({
      review: event.target.review,
    });
  }

  handleChangeRating = (event) => {
    this.setState({
      rating: event.target.rating,
    });
  }

  handleSubmit = () => {
    alert('Ta quase time');
    this.setState({
      review: '',
      rating: 0,
    });
  }

  render() {
    const detalhes = this.props.info.history.location.state.returnTo;
    const { review, rating } = this.state;
    return (
      <div data-testid="product-detail-name">
        <p>{detalhes.title}</p>
        <p>{detalhes.image}</p>
        <p>{detalhes.price}</p>

        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="text-input">
            <textarea
              data-testid="product-detail-evaluation"
              id="text-input"
              value={ review }
              onChange={ this.handleChangeReview }
            />
          </label>

          <label htmlFor="rating">
            <input
              type="number"
              id="rating"
              min="0"
              max="5"
              value={ rating }
              onChange={ this.handleChangeRating }
            />
          </label>

          <button type="button" onClick={ this.handleSubmit }>avaliar</button>
        </form>

      </div>
    );
  }
}

export default ProductDetail;
