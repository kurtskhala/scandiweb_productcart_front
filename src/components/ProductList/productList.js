import { Component } from 'react';
import axios from 'axios';
import './productListStyles.css';
import ProductCard from '../ProductCard/productCard';

class ProductsList extends Component{
  state = {
    products : []
  }

  componentDidMount() {
    let formData = new FormData();
    formData.append("text", this.state.text);
    const url = "http://localhost/scandiweb_productcart_back/saveData.php?";
    axios.get(url)
    .then(res => this.setState({products: res.data}))
    .catch(err => console.log(err))

  }

  render() {

    return (
        <form action="http://localhost/scandiweb_productcart_back/massDelete.php" method="post" id="check">
          <div className="app-productlist">
            { this.state.products?
                this.state.products.map((product) => {
                    return  <ProductCard data = {product} key={product.ID}/>
                }):
                null
            }
          </div>
        </form>
    );
  }
}

export default ProductsList;
