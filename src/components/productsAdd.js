import Footer from "./Footer/footer";
import Header from "./Header/header"
import ProductAddForm from "./ProductAddForm/productAddForm";
import React, { Component } from 'react';

// import ProductsList from "./ProductList/productList";
class ProductAddPage extends Component {
    state = {  } 

    render() { 
        return (
            <>
                <Header h2="Product Add" btn1="Save" btn2="Cancel"/>
                <ProductAddForm />
                <Footer />
            </>
        );
    }
}
 
export default ProductAddPage;
