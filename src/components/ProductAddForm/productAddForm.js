import React, { Component } from 'react';
import './productAddFormStyles.css';


class ProductAddForm extends Component {
    constructor() {
        super();
      }
    state = { 
        type : "",
    } 

    handleChange(e) {
        this.setState({type: e.target.value})
    }
    

    render() { 
        return (
            <div className='app-productadd-form-container'>
                <form action='http://localhost/scandiweb_productcart_back/index.php' method='POST' name='data' id="product_form">
                    <div className='app-productadd-form-input-container'>
                        <label for="sku" className="SKU">SKU </label>
                        <input type="text" name="sku" id="sku" required />
                    </div>
                    <div className='app-productadd-form-input-container'>
                        <label for="name" className="NAME">Name </label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div className='app-productadd-form-input-container'>
                        <label for="price" className="PRICE">Price ($) </label>
                        <input type="number" name="price" id="price" required />
                    </div>
                    <div className='app-productadd-form-input-container'>
                        <label for="selection">Type Swicher </label>
                        <select onChange={this.handleChange.bind(this)} id="productType" name="selection" required>
                            <option value="">choose option</option>
                            <option value="DVD">DVD</option>
                            <option value="FURNITURE">Furniture</option>
                            <option value="BOOK">Book</option>
                        </select>
                    </div>
                    {
                        this.state.type === "DVD"?
                        <>
                            <div className='app-productadd-form-input-container' id="dvd">
                                <label for="size" className="SIZE">Size (MB) </label>
                                <input type="number" name="size" id="size" required/>
                            </div>
                            <p className="masProvide">Please, provide size in MB</p>
                        </>:
                        this.state.type === "FURNITURE"?
                        <>
                            <div className='app-productadd-form-input-container' id="furniture">
                                <label for="height" className="HEIGHT">Height (CM) </label>  
                                <input type="number" name="height" id="height" required/> 
                            </div>
                            <div className='app-productadd-form-input-container' id="furniture">
                                <label for="width" className="WIDTH">Width (CM) </label>
                                <input type="number" name="width" id="width" required/>
                            </div>
                            <div className='app-productadd-form-input-container' id="furniture">
                                <label for="length" className="LENGTH">Length (CM) </label>
                                <input type="number" name="length" id="length" required/>
                            </div>
                            <p className="masProvide">Please, provide demension in CM</p>
                        </>:
                        this.state.type === "BOOK"?
                        <>
                            <div className='app-productadd-form-input-container' id="book">
                                <label for="weigth" className="WEIGHT">Weight (KG) </label>
                                <input type="number" name="weight" id="weight" required/>
                            </div>
                            <p className="masProvide">Please, provide weight in KG</p>
                        </>:
                        null
                    }
                </form>
            </div>
        );
    }
}
 
export default ProductAddForm;