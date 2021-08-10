import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class CardList extends Component {
  constructor() {
    super();

    this.handleLoading = this.handleLoading.bind(this);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.handleLoading();
  }

  handleLoading() {
    // const { loading } = this.state;
    this.setState({
      loading: false,
    });
  }

  // mappingList() {
  //   const { productsList } = this.props;
  //   productsList.map((product) => (<Card
  //     key={ product.id }
  //     title={ product.title }
  //     thumbnail={ product.thumbnail }
  //     price={ product.price }
  //   />));
  // }

  render() {
    const { productsList } = this.props;
    const { loading } = this.state;
    const mapCart = productsList.map((product) => (<Card
      key={ product.id }
      title={ product.title }
      thumbnail={ product.thumbnail }
      price={ product.price }
    />));
    if (productsList.length === 0) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      <div className="cardlist">
        { loading ? 'carregando' : mapCart }
      </div>
    );
  }
}

CardList.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
