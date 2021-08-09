import React, { Component } from "react";
import * as api from "../services/api";
import ProductCard from "./ProductCard";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  async fetchProducts() {
    const { query, catId } = this.props;
    //const results = await api.getCategories();
    const fetch = await api.getProductsFromCategoryAndQuery(catId, query);
    const results = await fetch.results;
    console.log(results);
    this.setState({ products: results });
  }

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.products !== this.state.products) {
      //this.fetchProducts();
      console.log(this.state.products);
      console.log(prevState.products);
    }
  }

  render() {
    const { products } = this.state;

    if (!products) return <div>Nenhum produto foi encontrado</div>;
    return (
      <div>
        {products.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    );
  }
}

export default ProductList;
