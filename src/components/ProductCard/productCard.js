import React, { Component } from 'react';
import './productCardStyles.css';


class ProductCard extends Component {
    state = {  } 
    render() { 
        return (
            <div className='app-productcard'>
                <input className="app-productcard-checkbox delete-checkbox" type="checkbox" name="check_list[]" id="checkbox" value= {this.props.data.ID}/>
                <div className='app-productcard-info-container'>
                    <span className='app-productcard-info'>{this.props.data.SKU}</span>
                    <span className='app-productcard-info'>{this.props.data.Name}</span>
                    <span className='app-productcard-info'>{this.props.data.Price} $</span>
                    <span className='app-productcard-info'>
                        {this.props.data.Type==="DVD"?
                        `Size: ${this.props.data.Size} MB`:
                        this.props.data.Type==="FURNITURE"?
                        `Dimension: ${this.props.data.Height} x ${this.props.data.Width} x ${this.props.data.Length}`:
                        this.props.data.Type==="BOOK"?
                        `Weight: ${this.props.data.Weight}KG`:
                        null}
                    </span>
                </div>
            </div>
        );
    }
}
 
export default ProductCard;