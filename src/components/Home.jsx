import React from 'react'
import CartButton from './CartButton'
import Search from './Search';
import ProductCard from '../components/ProductCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            results: [],
            showCard: false,
          };
        
        this.handleClick = this.handleClick.bind(this);
    };


    async handleClick() {
        const { search } = this.state;
        const { results } = await getProductsFromCategoryAndQuery('', search);
        this.setState({
          results,
          showCard: true,
        });
      }

    render() {
        const { results, showCard } = this.state;
        return(
            <div>
        <Search onClick={ this.handleClick } />
        <CartButton />
        { (showCard && <ProductCard results={ results } />) }
      </div>
        )
    }
}


export default Home;